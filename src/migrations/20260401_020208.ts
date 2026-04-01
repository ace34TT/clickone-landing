import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`pages_blocks_feature_grid_cards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`card_title\` text,
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_feature_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feature_grid_cards_order_idx\` ON \`pages_blocks_feature_grid_cards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feature_grid_cards_parent_id_idx\` ON \`pages_blocks_feature_grid_cards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_icon_cards_cards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`icon_id\` integer,
  	\`card_title\` text,
  	\`description\` text,
  	FOREIGN KEY (\`icon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_icon_cards\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_icon_cards_cards_order_idx\` ON \`pages_blocks_icon_cards_cards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_icon_cards_cards_parent_id_idx\` ON \`pages_blocks_icon_cards_cards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_icon_cards_cards_icon_idx\` ON \`pages_blocks_icon_cards_cards\` (\`icon_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_icon_cards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_icon_cards_order_idx\` ON \`pages_blocks_icon_cards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_icon_cards_parent_id_idx\` ON \`pages_blocks_icon_cards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_icon_cards_path_idx\` ON \`pages_blocks_icon_cards\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_steps_process_steps\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`icon_id\` integer,
  	\`step_title\` text,
  	\`description\` text,
  	FOREIGN KEY (\`icon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_steps\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_steps_process_steps_order_idx\` ON \`pages_blocks_steps_process_steps\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_steps_process_steps_parent_id_idx\` ON \`pages_blocks_steps_process_steps\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_steps_process_steps_icon_idx\` ON \`pages_blocks_steps_process_steps\` (\`icon_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_steps\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_steps_order_idx\` ON \`pages_blocks_steps\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_steps_parent_id_idx\` ON \`pages_blocks_steps\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_steps_path_idx\` ON \`pages_blocks_steps\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_portfolio_showcase_projects\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`project_name\` text,
  	\`image_id\` integer,
  	\`lnk_type\` text DEFAULT 'reference',
  	\`lnk_new_tab\` integer,
  	\`lnk_url\` text,
  	\`lnk_label\` text,
  	\`lnk_appearance\` text DEFAULT 'default',
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_portfolio_showcase\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_portfolio_showcase_projects_order_idx\` ON \`pages_blocks_portfolio_showcase_projects\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_portfolio_showcase_projects_parent_id_idx\` ON \`pages_blocks_portfolio_showcase_projects\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_portfolio_showcase_projects_image_idx\` ON \`pages_blocks_portfolio_showcase_projects\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_portfolio_showcase\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`styles_background_image_id\` integer,
  	\`styles_is_full_width\` integer DEFAULT false,
  	\`styles_padding_top\` integer DEFAULT true,
  	\`block_name\` text,
  	FOREIGN KEY (\`styles_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_portfolio_showcase_order_idx\` ON \`pages_blocks_portfolio_showcase\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_portfolio_showcase_parent_id_idx\` ON \`pages_blocks_portfolio_showcase\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_portfolio_showcase_path_idx\` ON \`pages_blocks_portfolio_showcase\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_portfolio_showcase_styles_styles_background_idx\` ON \`pages_blocks_portfolio_showcase\` (\`styles_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_pricing_table_plans_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`feature\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_pricing_table_plans\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_pricing_table_plans_features_order_idx\` ON \`pages_blocks_pricing_table_plans_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_pricing_table_plans_features_parent_id_idx\` ON \`pages_blocks_pricing_table_plans_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_pricing_table_plans\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`plan_name\` text,
  	\`price\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_pricing_table\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_pricing_table_plans_order_idx\` ON \`pages_blocks_pricing_table_plans\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_pricing_table_plans_parent_id_idx\` ON \`pages_blocks_pricing_table_plans\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_pricing_table_extra_options\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`option_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_pricing_table\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_pricing_table_extra_options_order_idx\` ON \`pages_blocks_pricing_table_extra_options\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_pricing_table_extra_options_parent_id_idx\` ON \`pages_blocks_pricing_table_extra_options\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_pricing_table\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`subtitle\` text,
  	\`options_title\` text DEFAULT 'En Option',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_pricing_table_order_idx\` ON \`pages_blocks_pricing_table\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_pricing_table_parent_id_idx\` ON \`pages_blocks_pricing_table\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_pricing_table_path_idx\` ON \`pages_blocks_pricing_table\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_detailed_grid_content_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`item_title\` text,
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_detailed_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_detailed_grid_content_items_order_idx\` ON \`pages_blocks_detailed_grid_content_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_detailed_grid_content_items_parent_id_idx\` ON \`pages_blocks_detailed_grid_content_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_detailed_grid_image_array\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`graphic_icon_id\` integer,
  	FOREIGN KEY (\`graphic_icon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_detailed_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_detailed_grid_image_array_order_idx\` ON \`pages_blocks_detailed_grid_image_array\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_detailed_grid_image_array_parent_id_idx\` ON \`pages_blocks_detailed_grid_image_array\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_detailed_grid_image_array_graphic_icon_idx\` ON \`pages_blocks_detailed_grid_image_array\` (\`graphic_icon_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_detailed_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_detailed_grid_order_idx\` ON \`pages_blocks_detailed_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_detailed_grid_parent_id_idx\` ON \`pages_blocks_detailed_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_detailed_grid_path_idx\` ON \`pages_blocks_detailed_grid\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_feature_grid_cards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`card_title\` text,
  	\`description\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_feature_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_feature_grid_cards_order_idx\` ON \`_pages_v_blocks_feature_grid_cards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_feature_grid_cards_parent_id_idx\` ON \`_pages_v_blocks_feature_grid_cards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_icon_cards_cards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`icon_id\` integer,
  	\`card_title\` text,
  	\`description\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`icon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_icon_cards\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_icon_cards_cards_order_idx\` ON \`_pages_v_blocks_icon_cards_cards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_icon_cards_cards_parent_id_idx\` ON \`_pages_v_blocks_icon_cards_cards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_icon_cards_cards_icon_idx\` ON \`_pages_v_blocks_icon_cards_cards\` (\`icon_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_icon_cards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_icon_cards_order_idx\` ON \`_pages_v_blocks_icon_cards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_icon_cards_parent_id_idx\` ON \`_pages_v_blocks_icon_cards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_icon_cards_path_idx\` ON \`_pages_v_blocks_icon_cards\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_steps_process_steps\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`icon_id\` integer,
  	\`step_title\` text,
  	\`description\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`icon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_steps\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_steps_process_steps_order_idx\` ON \`_pages_v_blocks_steps_process_steps\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_steps_process_steps_parent_id_idx\` ON \`_pages_v_blocks_steps_process_steps\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_steps_process_steps_icon_idx\` ON \`_pages_v_blocks_steps_process_steps\` (\`icon_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_steps\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_steps_order_idx\` ON \`_pages_v_blocks_steps\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_steps_parent_id_idx\` ON \`_pages_v_blocks_steps\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_steps_path_idx\` ON \`_pages_v_blocks_steps\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_portfolio_showcase_projects\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`project_name\` text,
  	\`image_id\` integer,
  	\`lnk_type\` text DEFAULT 'reference',
  	\`lnk_new_tab\` integer,
  	\`lnk_url\` text,
  	\`lnk_label\` text,
  	\`lnk_appearance\` text DEFAULT 'default',
  	\`_uuid\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_portfolio_showcase\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_portfolio_showcase_projects_order_idx\` ON \`_pages_v_blocks_portfolio_showcase_projects\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_portfolio_showcase_projects_parent_id_idx\` ON \`_pages_v_blocks_portfolio_showcase_projects\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_portfolio_showcase_projects_image_idx\` ON \`_pages_v_blocks_portfolio_showcase_projects\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_portfolio_showcase\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`styles_background_image_id\` integer,
  	\`styles_is_full_width\` integer DEFAULT false,
  	\`styles_padding_top\` integer DEFAULT true,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`styles_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_portfolio_showcase_order_idx\` ON \`_pages_v_blocks_portfolio_showcase\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_portfolio_showcase_parent_id_idx\` ON \`_pages_v_blocks_portfolio_showcase\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_portfolio_showcase_path_idx\` ON \`_pages_v_blocks_portfolio_showcase\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_portfolio_showcase_styles_styles_backgro_idx\` ON \`_pages_v_blocks_portfolio_showcase\` (\`styles_background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_pricing_table_plans_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`feature\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_pricing_table_plans\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_pricing_table_plans_features_order_idx\` ON \`_pages_v_blocks_pricing_table_plans_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_pricing_table_plans_features_parent_id_idx\` ON \`_pages_v_blocks_pricing_table_plans_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_pricing_table_plans\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`plan_name\` text,
  	\`price\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_pricing_table\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_pricing_table_plans_order_idx\` ON \`_pages_v_blocks_pricing_table_plans\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_pricing_table_plans_parent_id_idx\` ON \`_pages_v_blocks_pricing_table_plans\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_pricing_table_extra_options\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`option_name\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_pricing_table\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_pricing_table_extra_options_order_idx\` ON \`_pages_v_blocks_pricing_table_extra_options\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_pricing_table_extra_options_parent_id_idx\` ON \`_pages_v_blocks_pricing_table_extra_options\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_pricing_table\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`subtitle\` text,
  	\`options_title\` text DEFAULT 'En Option',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_pricing_table_order_idx\` ON \`_pages_v_blocks_pricing_table\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_pricing_table_parent_id_idx\` ON \`_pages_v_blocks_pricing_table\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_pricing_table_path_idx\` ON \`_pages_v_blocks_pricing_table\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_detailed_grid_content_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`item_title\` text,
  	\`description\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_detailed_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_detailed_grid_content_items_order_idx\` ON \`_pages_v_blocks_detailed_grid_content_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_detailed_grid_content_items_parent_id_idx\` ON \`_pages_v_blocks_detailed_grid_content_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_detailed_grid_image_array\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`graphic_icon_id\` integer,
  	\`_uuid\` text,
  	FOREIGN KEY (\`graphic_icon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_detailed_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_detailed_grid_image_array_order_idx\` ON \`_pages_v_blocks_detailed_grid_image_array\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_detailed_grid_image_array_parent_id_idx\` ON \`_pages_v_blocks_detailed_grid_image_array\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_detailed_grid_image_array_graphic_icon_idx\` ON \`_pages_v_blocks_detailed_grid_image_array\` (\`graphic_icon_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_detailed_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_detailed_grid_order_idx\` ON \`_pages_v_blocks_detailed_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_detailed_grid_parent_id_idx\` ON \`_pages_v_blocks_detailed_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_detailed_grid_path_idx\` ON \`_pages_v_blocks_detailed_grid\` (\`_path\`);`)
  await db.run(sql`ALTER TABLE \`pages_blocks_media_content\` ADD \`styles_background_image_id\` integer REFERENCES media(id);`)
  await db.run(sql`ALTER TABLE \`pages_blocks_media_content\` ADD \`styles_is_full_width\` integer DEFAULT false;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_media_content\` ADD \`styles_padding_top\` integer DEFAULT true;`)
  await db.run(sql`CREATE INDEX \`pages_blocks_media_content_styles_styles_background_imag_idx\` ON \`pages_blocks_media_content\` (\`styles_background_image_id\`);`)
  await db.run(sql`ALTER TABLE \`pages_blocks_feature_grid\` ADD \`subtitle\` text;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_feature_grid\` ADD \`link_type\` text DEFAULT 'reference';`)
  await db.run(sql`ALTER TABLE \`pages_blocks_feature_grid\` ADD \`link_new_tab\` integer;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_feature_grid\` ADD \`link_url\` text;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_feature_grid\` ADD \`link_label\` text;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_feature_grid\` ADD \`link_appearance\` text DEFAULT 'default';`)
  await db.run(sql`ALTER TABLE \`pages_blocks_feature_grid\` ADD \`styles_background_image_id\` integer REFERENCES media(id);`)
  await db.run(sql`ALTER TABLE \`pages_blocks_feature_grid\` ADD \`styles_is_full_width\` integer DEFAULT false;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_feature_grid\` ADD \`styles_padding_top\` integer DEFAULT true;`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feature_grid_styles_styles_background_image_idx\` ON \`pages_blocks_feature_grid\` (\`styles_background_image_id\`);`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_media_content\` ADD \`styles_background_image_id\` integer REFERENCES media(id);`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_media_content\` ADD \`styles_is_full_width\` integer DEFAULT false;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_media_content\` ADD \`styles_padding_top\` integer DEFAULT true;`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_media_content_styles_styles_background_i_idx\` ON \`_pages_v_blocks_media_content\` (\`styles_background_image_id\`);`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_feature_grid\` ADD \`subtitle\` text;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_feature_grid\` ADD \`link_type\` text DEFAULT 'reference';`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_feature_grid\` ADD \`link_new_tab\` integer;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_feature_grid\` ADD \`link_url\` text;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_feature_grid\` ADD \`link_label\` text;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_feature_grid\` ADD \`link_appearance\` text DEFAULT 'default';`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_feature_grid\` ADD \`styles_background_image_id\` integer REFERENCES media(id);`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_feature_grid\` ADD \`styles_is_full_width\` integer DEFAULT false;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_feature_grid\` ADD \`styles_padding_top\` integer DEFAULT true;`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_feature_grid_styles_styles_background_im_idx\` ON \`_pages_v_blocks_feature_grid\` (\`styles_background_image_id\`);`)
  await db.run(sql`ALTER TABLE \`footer\` ADD \`title_subtitle\` text DEFAULT 'Démarrons';`)
  await db.run(sql`ALTER TABLE \`footer\` ADD \`title_highlight\` text DEFAULT 'Votre Projet';`)
  await db.run(sql`ALTER TABLE \`footer\` ADD \`title_end\` text DEFAULT 'ensemble';`)
  await db.run(sql`ALTER TABLE \`footer\` ADD \`phone\` text DEFAULT '07 85 76 30 86';`)
  await db.run(sql`ALTER TABLE \`footer\` ADD \`email\` text DEFAULT 'medji@click-one.fr';`)
  await db.run(sql`ALTER TABLE \`footer\` ADD \`website\` text DEFAULT 'click-one.fr';`)
  await db.run(sql`ALTER TABLE \`footer\` ADD \`cta_type\` text DEFAULT 'reference';`)
  await db.run(sql`ALTER TABLE \`footer\` ADD \`cta_new_tab\` integer;`)
  await db.run(sql`ALTER TABLE \`footer\` ADD \`cta_url\` text;`)
  await db.run(sql`ALTER TABLE \`footer\` ADD \`cta_label\` text NOT NULL;`)
  await db.run(sql`ALTER TABLE \`footer\` ADD \`cta_appearance\` text DEFAULT 'default';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`pages_blocks_feature_grid_cards\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_icon_cards_cards\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_icon_cards\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_steps_process_steps\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_steps\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_portfolio_showcase_projects\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_portfolio_showcase\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_pricing_table_plans_features\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_pricing_table_plans\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_pricing_table_extra_options\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_pricing_table\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_detailed_grid_content_items\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_detailed_grid_image_array\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_detailed_grid\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_feature_grid_cards\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_icon_cards_cards\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_icon_cards\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_steps_process_steps\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_steps\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_portfolio_showcase_projects\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_portfolio_showcase\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_pricing_table_plans_features\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_pricing_table_plans\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_pricing_table_extra_options\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_pricing_table\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_detailed_grid_content_items\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_detailed_grid_image_array\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_detailed_grid\`;`)
  await db.run(sql`PRAGMA foreign_keys=OFF;`)
  await db.run(sql`CREATE TABLE \`__new_pages_blocks_media_content\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`layout\` text DEFAULT 'imageLeft',
  	\`title\` text,
  	\`content\` text,
  	\`image_id\` integer,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_url\` text,
  	\`link_label\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_pages_blocks_media_content\`("_order", "_parent_id", "_path", "id", "layout", "title", "content", "image_id", "link_type", "link_new_tab", "link_url", "link_label", "link_appearance", "block_name") SELECT "_order", "_parent_id", "_path", "id", "layout", "title", "content", "image_id", "link_type", "link_new_tab", "link_url", "link_label", "link_appearance", "block_name" FROM \`pages_blocks_media_content\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_media_content\`;`)
  await db.run(sql`ALTER TABLE \`__new_pages_blocks_media_content\` RENAME TO \`pages_blocks_media_content\`;`)
  await db.run(sql`PRAGMA foreign_keys=ON;`)
  await db.run(sql`CREATE INDEX \`pages_blocks_media_content_order_idx\` ON \`pages_blocks_media_content\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_media_content_parent_id_idx\` ON \`pages_blocks_media_content\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_media_content_path_idx\` ON \`pages_blocks_media_content\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_media_content_image_idx\` ON \`pages_blocks_media_content\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`__new_pages_blocks_feature_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new_pages_blocks_feature_grid\`("_order", "_parent_id", "_path", "id", "title", "block_name") SELECT "_order", "_parent_id", "_path", "id", "title", "block_name" FROM \`pages_blocks_feature_grid\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feature_grid\`;`)
  await db.run(sql`ALTER TABLE \`__new_pages_blocks_feature_grid\` RENAME TO \`pages_blocks_feature_grid\`;`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feature_grid_order_idx\` ON \`pages_blocks_feature_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feature_grid_parent_id_idx\` ON \`pages_blocks_feature_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feature_grid_path_idx\` ON \`pages_blocks_feature_grid\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`__new__pages_v_blocks_media_content\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`layout\` text DEFAULT 'imageLeft',
  	\`title\` text,
  	\`content\` text,
  	\`image_id\` integer,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_url\` text,
  	\`link_label\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new__pages_v_blocks_media_content\`("_order", "_parent_id", "_path", "id", "layout", "title", "content", "image_id", "link_type", "link_new_tab", "link_url", "link_label", "link_appearance", "_uuid", "block_name") SELECT "_order", "_parent_id", "_path", "id", "layout", "title", "content", "image_id", "link_type", "link_new_tab", "link_url", "link_label", "link_appearance", "_uuid", "block_name" FROM \`_pages_v_blocks_media_content\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_media_content\`;`)
  await db.run(sql`ALTER TABLE \`__new__pages_v_blocks_media_content\` RENAME TO \`_pages_v_blocks_media_content\`;`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_media_content_order_idx\` ON \`_pages_v_blocks_media_content\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_media_content_parent_id_idx\` ON \`_pages_v_blocks_media_content\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_media_content_path_idx\` ON \`_pages_v_blocks_media_content\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_media_content_image_idx\` ON \`_pages_v_blocks_media_content\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`__new__pages_v_blocks_feature_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`INSERT INTO \`__new__pages_v_blocks_feature_grid\`("_order", "_parent_id", "_path", "id", "title", "_uuid", "block_name") SELECT "_order", "_parent_id", "_path", "id", "title", "_uuid", "block_name" FROM \`_pages_v_blocks_feature_grid\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_feature_grid\`;`)
  await db.run(sql`ALTER TABLE \`__new__pages_v_blocks_feature_grid\` RENAME TO \`_pages_v_blocks_feature_grid\`;`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_feature_grid_order_idx\` ON \`_pages_v_blocks_feature_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_feature_grid_parent_id_idx\` ON \`_pages_v_blocks_feature_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_feature_grid_path_idx\` ON \`_pages_v_blocks_feature_grid\` (\`_path\`);`)
  await db.run(sql`ALTER TABLE \`footer\` DROP COLUMN \`title_subtitle\`;`)
  await db.run(sql`ALTER TABLE \`footer\` DROP COLUMN \`title_highlight\`;`)
  await db.run(sql`ALTER TABLE \`footer\` DROP COLUMN \`title_end\`;`)
  await db.run(sql`ALTER TABLE \`footer\` DROP COLUMN \`phone\`;`)
  await db.run(sql`ALTER TABLE \`footer\` DROP COLUMN \`email\`;`)
  await db.run(sql`ALTER TABLE \`footer\` DROP COLUMN \`website\`;`)
  await db.run(sql`ALTER TABLE \`footer\` DROP COLUMN \`cta_type\`;`)
  await db.run(sql`ALTER TABLE \`footer\` DROP COLUMN \`cta_new_tab\`;`)
  await db.run(sql`ALTER TABLE \`footer\` DROP COLUMN \`cta_url\`;`)
  await db.run(sql`ALTER TABLE \`footer\` DROP COLUMN \`cta_label\`;`)
  await db.run(sql`ALTER TABLE \`footer\` DROP COLUMN \`cta_appearance\`;`)
}
