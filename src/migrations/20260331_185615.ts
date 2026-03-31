import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`pages_blocks_media_content\` (
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
  await db.run(sql`CREATE INDEX \`pages_blocks_media_content_order_idx\` ON \`pages_blocks_media_content\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_media_content_parent_id_idx\` ON \`pages_blocks_media_content\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_media_content_path_idx\` ON \`pages_blocks_media_content\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_media_content_image_idx\` ON \`pages_blocks_media_content\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feature_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feature_grid_order_idx\` ON \`pages_blocks_feature_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feature_grid_parent_id_idx\` ON \`pages_blocks_feature_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feature_grid_path_idx\` ON \`pages_blocks_feature_grid\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_media_content\` (
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
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_media_content_order_idx\` ON \`_pages_v_blocks_media_content\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_media_content_parent_id_idx\` ON \`_pages_v_blocks_media_content\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_media_content_path_idx\` ON \`_pages_v_blocks_media_content\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_media_content_image_idx\` ON \`_pages_v_blocks_media_content\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_feature_grid\` (
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
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_feature_grid_order_idx\` ON \`_pages_v_blocks_feature_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_feature_grid_parent_id_idx\` ON \`_pages_v_blocks_feature_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_feature_grid_path_idx\` ON \`_pages_v_blocks_feature_grid\` (\`_path\`);`)
  await db.run(sql`DROP INDEX \`media_sizes_thumbnail_sizes_thumbnail_filename_idx\`;`)
  await db.run(sql`DROP INDEX \`media_sizes_square_sizes_square_filename_idx\`;`)
  await db.run(sql`DROP INDEX \`media_sizes_small_sizes_small_filename_idx\`;`)
  await db.run(sql`DROP INDEX \`media_sizes_medium_sizes_medium_filename_idx\`;`)
  await db.run(sql`DROP INDEX \`media_sizes_large_sizes_large_filename_idx\`;`)
  await db.run(sql`DROP INDEX \`media_sizes_xlarge_sizes_xlarge_filename_idx\`;`)
  await db.run(sql`DROP INDEX \`media_sizes_og_sizes_og_filename_idx\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_thumbnail_url\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_thumbnail_width\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_thumbnail_height\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_thumbnail_mime_type\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_thumbnail_filesize\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_thumbnail_filename\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_square_url\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_square_width\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_square_height\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_square_mime_type\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_square_filesize\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_square_filename\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_small_url\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_small_width\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_small_height\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_small_mime_type\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_small_filesize\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_small_filename\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_medium_url\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_medium_width\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_medium_height\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_medium_mime_type\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_medium_filesize\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_medium_filename\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_large_url\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_large_width\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_large_height\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_large_mime_type\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_large_filesize\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_large_filename\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_xlarge_url\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_xlarge_width\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_xlarge_height\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_xlarge_mime_type\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_xlarge_filesize\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_xlarge_filename\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_og_url\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_og_width\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_og_height\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_og_mime_type\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_og_filesize\`;`)
  await db.run(sql`ALTER TABLE \`media\` DROP COLUMN \`sizes_og_filename\`;`)
  await db.run(sql`ALTER TABLE \`pages\` ADD \`hero_high_impact_props_title\` text;`)
  await db.run(sql`ALTER TABLE \`pages\` ADD \`hero_high_impact_props_subtitle\` text;`)
  await db.run(sql`ALTER TABLE \`pages\` ADD \`hero_high_impact_props_presentation_name\` text;`)
  await db.run(sql`ALTER TABLE \`pages\` ADD \`hero_high_impact_props_presentation_phone\` text;`)
  await db.run(sql`ALTER TABLE \`pages\` ADD \`hero_high_impact_props_email_address\` text;`)
  await db.run(sql`ALTER TABLE \`pages\` ADD \`hero_high_impact_props_cta_text\` text;`)
  await db.run(sql`ALTER TABLE \`_pages_v\` ADD \`version_hero_high_impact_props_title\` text;`)
  await db.run(sql`ALTER TABLE \`_pages_v\` ADD \`version_hero_high_impact_props_subtitle\` text;`)
  await db.run(sql`ALTER TABLE \`_pages_v\` ADD \`version_hero_high_impact_props_presentation_name\` text;`)
  await db.run(sql`ALTER TABLE \`_pages_v\` ADD \`version_hero_high_impact_props_presentation_phone\` text;`)
  await db.run(sql`ALTER TABLE \`_pages_v\` ADD \`version_hero_high_impact_props_email_address\` text;`)
  await db.run(sql`ALTER TABLE \`_pages_v\` ADD \`version_hero_high_impact_props_cta_text\` text;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`pages_blocks_media_content\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feature_grid\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_media_content\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_feature_grid\`;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_thumbnail_url\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_thumbnail_width\` numeric;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_thumbnail_height\` numeric;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_thumbnail_mime_type\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_thumbnail_filesize\` numeric;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_thumbnail_filename\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_square_url\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_square_width\` numeric;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_square_height\` numeric;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_square_mime_type\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_square_filesize\` numeric;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_square_filename\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_small_url\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_small_width\` numeric;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_small_height\` numeric;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_small_mime_type\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_small_filesize\` numeric;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_small_filename\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_medium_url\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_medium_width\` numeric;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_medium_height\` numeric;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_medium_mime_type\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_medium_filesize\` numeric;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_medium_filename\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_large_url\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_large_width\` numeric;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_large_height\` numeric;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_large_mime_type\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_large_filesize\` numeric;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_large_filename\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_xlarge_url\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_xlarge_width\` numeric;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_xlarge_height\` numeric;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_xlarge_mime_type\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_xlarge_filesize\` numeric;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_xlarge_filename\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_og_url\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_og_width\` numeric;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_og_height\` numeric;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_og_mime_type\` text;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_og_filesize\` numeric;`)
  await db.run(sql`ALTER TABLE \`media\` ADD \`sizes_og_filename\` text;`)
  await db.run(sql`CREATE INDEX \`media_sizes_thumbnail_sizes_thumbnail_filename_idx\` ON \`media\` (\`sizes_thumbnail_filename\`);`)
  await db.run(sql`CREATE INDEX \`media_sizes_square_sizes_square_filename_idx\` ON \`media\` (\`sizes_square_filename\`);`)
  await db.run(sql`CREATE INDEX \`media_sizes_small_sizes_small_filename_idx\` ON \`media\` (\`sizes_small_filename\`);`)
  await db.run(sql`CREATE INDEX \`media_sizes_medium_sizes_medium_filename_idx\` ON \`media\` (\`sizes_medium_filename\`);`)
  await db.run(sql`CREATE INDEX \`media_sizes_large_sizes_large_filename_idx\` ON \`media\` (\`sizes_large_filename\`);`)
  await db.run(sql`CREATE INDEX \`media_sizes_xlarge_sizes_xlarge_filename_idx\` ON \`media\` (\`sizes_xlarge_filename\`);`)
  await db.run(sql`CREATE INDEX \`media_sizes_og_sizes_og_filename_idx\` ON \`media\` (\`sizes_og_filename\`);`)
  await db.run(sql`ALTER TABLE \`pages\` DROP COLUMN \`hero_high_impact_props_title\`;`)
  await db.run(sql`ALTER TABLE \`pages\` DROP COLUMN \`hero_high_impact_props_subtitle\`;`)
  await db.run(sql`ALTER TABLE \`pages\` DROP COLUMN \`hero_high_impact_props_presentation_name\`;`)
  await db.run(sql`ALTER TABLE \`pages\` DROP COLUMN \`hero_high_impact_props_presentation_phone\`;`)
  await db.run(sql`ALTER TABLE \`pages\` DROP COLUMN \`hero_high_impact_props_email_address\`;`)
  await db.run(sql`ALTER TABLE \`pages\` DROP COLUMN \`hero_high_impact_props_cta_text\`;`)
  await db.run(sql`ALTER TABLE \`_pages_v\` DROP COLUMN \`version_hero_high_impact_props_title\`;`)
  await db.run(sql`ALTER TABLE \`_pages_v\` DROP COLUMN \`version_hero_high_impact_props_subtitle\`;`)
  await db.run(sql`ALTER TABLE \`_pages_v\` DROP COLUMN \`version_hero_high_impact_props_presentation_name\`;`)
  await db.run(sql`ALTER TABLE \`_pages_v\` DROP COLUMN \`version_hero_high_impact_props_presentation_phone\`;`)
  await db.run(sql`ALTER TABLE \`_pages_v\` DROP COLUMN \`version_hero_high_impact_props_email_address\`;`)
  await db.run(sql`ALTER TABLE \`_pages_v\` DROP COLUMN \`version_hero_high_impact_props_cta_text\`;`)
}
