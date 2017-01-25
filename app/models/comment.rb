class Comment < ApplicationRecord
  belongs_to :post
  belongs_to :member

  delegate :team, to: :post

  validates :post, presence: true
  validates :member, presence: true
  validates :content, presence: true
  validates_with TeammateValidator
end
