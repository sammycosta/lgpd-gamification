CREATE TABLE `account` (
	`id` text PRIMARY KEY NOT NULL,
	`account_id` text NOT NULL,
	`provider_id` text NOT NULL,
	`user_id` text NOT NULL,
	`access_token` text,
	`refresh_token` text,
	`id_token` text,
	`access_token_expires_at` integer,
	`refresh_token_expires_at` integer,
	`scope` text,
	`password` text,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `session` (
	`id` text PRIMARY KEY NOT NULL,
	`expires_at` integer NOT NULL,
	`token` text NOT NULL,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	`updated_at` integer NOT NULL,
	`ip_address` text,
	`user_agent` text,
	`user_id` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `session_token_unique` ON `session` (`token`);--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`email_verified` integer DEFAULT false NOT NULL,
	`image` text,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	`updated_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	`points` integer DEFAULT 0 NOT NULL,
	`avatar_id` integer,
	`title_id` integer,
	FOREIGN KEY (`avatar_id`) REFERENCES `avatars`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`title_id`) REFERENCES `titles`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);--> statement-breakpoint
CREATE INDEX `users_avatar_id_idx` ON `users` (`avatar_id`);--> statement-breakpoint
CREATE INDEX `users_title_id_idx` ON `users` (`title_id`);--> statement-breakpoint
CREATE TABLE `verification` (
	`id` text PRIMARY KEY NOT NULL,
	`identifier` text NOT NULL,
	`value` text NOT NULL,
	`expires_at` integer NOT NULL,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	`updated_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `activities` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`module_id` integer NOT NULL,
	`type_id` integer NOT NULL,
	`points` integer DEFAULT 10 NOT NULL,
	FOREIGN KEY (`module_id`) REFERENCES `modules`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`type_id`) REFERENCES `activity_types`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `activities_module_id_idx` ON `activities` (`module_id`);--> statement-breakpoint
CREATE INDEX `activities_type_id_idx` ON `activities` (`type_id`);--> statement-breakpoint
CREATE TABLE `activity_types` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `matching_pairs` (
	`id` integer PRIMARY KEY NOT NULL,
	`activity_id` integer NOT NULL,
	`concept` text NOT NULL,
	`definition` text NOT NULL,
	FOREIGN KEY (`activity_id`) REFERENCES `activities`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `matching_pairs_activity_id_idx` ON `matching_pairs` (`activity_id`);--> statement-breakpoint
CREATE TABLE `modules` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`max_points` integer NOT NULL,
	`required_module_id` integer,
	FOREIGN KEY (`required_module_id`) REFERENCES `modules`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `qna_details` (
	`activity_id` integer PRIMARY KEY NOT NULL,
	`question` text NOT NULL,
	`is_multiple` integer DEFAULT false NOT NULL,
	FOREIGN KEY (`activity_id`) REFERENCES `activities`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `qna_details_activity_id_idx` ON `qna_details` (`activity_id`);--> statement-breakpoint
CREATE TABLE `qna_options` (
	`id` integer PRIMARY KEY NOT NULL,
	`activity_id` integer NOT NULL,
	`text` text NOT NULL,
	`is_correct` integer DEFAULT false NOT NULL,
	FOREIGN KEY (`activity_id`) REFERENCES `qna_details`(`activity_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `qna_options_activity_id_index` ON `qna_options` (`activity_id`);--> statement-breakpoint
CREATE TABLE `avatars` (
	`id` integer PRIMARY KEY NOT NULL,
	`file_path` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `badge_types` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `titles` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `user_badges` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`module_id` integer NOT NULL,
	`type_id` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`module_id`) REFERENCES `modules`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`type_id`) REFERENCES `badge_types`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `user_badges_user_id_idx` ON `user_badges` (`user_id`);--> statement-breakpoint
CREATE INDEX `user_badges_module_id_idx` ON `user_badges` (`module_id`);--> statement-breakpoint
CREATE INDEX `user_badges_type_id_idx` ON `user_badges` (`type_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_badges_user_id_module_id_uk` ON `user_badges` (`user_id`,`module_id`);--> statement-breakpoint
CREATE TABLE `user_activities` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`activity_id` integer NOT NULL,
	`is_correct` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`activity_id`) REFERENCES `activities`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `user_activities_user_id_idx` ON `user_activities` (`user_id`);--> statement-breakpoint
CREATE INDEX `user_activities_activity_id_idx` ON `user_activities` (`activity_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_activities_user_id_activity_id` ON `user_activities` (`user_id`,`activity_id`);--> statement-breakpoint
CREATE TABLE `user_modules` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`module_id` integer NOT NULL,
	`points` integer DEFAULT 0 NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`module_id`) REFERENCES `modules`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `user_modules_user_id_idx` ON `user_modules` (`user_id`);--> statement-breakpoint
CREATE INDEX `user_modules_module_id_idx` ON `user_modules` (`module_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_modules_user_id_module_id_uk` ON `user_modules` (`user_id`,`module_id`);