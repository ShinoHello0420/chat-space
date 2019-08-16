# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル
|Column  |Type   |Options                       |
|--------|-------|------------------------------|
|user_id |integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## commentsテーブル
|Column  |Type   |Options                       |
|--------|-------|------------------------------|
|text    |text   |null: false                   |
|user_id |integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :post
- belongs_to :user


## postsテーブル
|Column |Type   |Options                       |
|-------|-------|------------------------------|
|title  |text   |null: false                   |
|text   |text   |null: false                   |
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- has_many :comments
- has_many :posts_tags
- has_many  :tags,  through:  :posts_tags


## groupsテーブル
|Column  |Type   |Options                       |
|--------|-------|------------------------------|
|user_id |integer|null: false, foreign_key: true|
|text    |text   |null: false                   |
## Association
- belongs_to :user
- has_many :comments
