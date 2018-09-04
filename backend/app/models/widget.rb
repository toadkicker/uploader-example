class Widget < ApplicationRecord
  include ImageUploader[:photo]
end
