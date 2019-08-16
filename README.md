## usersテーブル
|Column  |Type   |Options                       |
|--------|-------|------------------------------|
|name    |string-|null: false|
### Association
- has_many :users_groups
- has_many :groups, through: :users_groups
- has_many :comments


## commentsテーブル
|Column  |Type   |Options                       |
|--------|-------|------------------------------|
|image   |text   |                              |
|text    |text   |                              |
|user_id |integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user


## users_groupsテーブル
|Column  |Type      |Options                       |
|--------|----------|------------------------------|
|user    |references|null: false, foreign_key: true|
|group_id|integer   |null: false, foreign_key: true|
### Association
- has_many :users, through: :users_groups
- has_many :users_groups


## groupsテーブル
|Column  |Type   |Options                       |
|--------|-------|------------------------------|
|name    |string |null: false                   |
## Association
- belongs_to :user
- has_many :comments