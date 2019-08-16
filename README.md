## usersテーブル
|Column  |Type   |Options                       |
|--------|-------|------------------------------|
|user_id |integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
- has_many :users_groups
- has_many :users, through: :users_groups


## commentsテーブル
|Column  |Type   |Options                       |
|--------|-------|------------------------------|
|text    |text   |null: false                   |
|user_id |integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :post
- belongs_to :user


## users_groupsテーブル
|Column |Type   |Options                       |
|-------|-------|------------------------------|
|user_id|integer|null: false, foreign_key: true|
|name   |integer|null: false                   |
### Association
- belongs_to :user
- has_many :comments


## groupsテーブル
|Column  |Type   |Options                       |
|--------|-------|------------------------------|
|name    |integer|null: false, foreign_key: true|
## Association
- belongs_to :user
- has_many :comments
