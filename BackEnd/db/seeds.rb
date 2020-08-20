# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

user_one = User.create(name: "Frank Sierra", email: "frank@video.com", password: '123movie')
user_two = User.create(name: "Abel Miranda", email: "abel@video.com", password: "Video321")

list_one = List.create(title: 'My horror movies', user_id: user_one.id)
list_two = List.create(title: 'My drama movies', user_id: user_two.id)

video_one = Video.create(youtube_url: 'CpBLtXduh_k', title: 'Palm Springs', overview:'When carefree Nyles and reluctant maid of honor Sarah have a chance encounter at a Palm Springs wedding', list_id: list_one.id)
video_two = Video.create(youtube_url: 'uxjNDE2fMjI', title: 'Twilight', overview:'When Bella Swan moves to a small town in the Pacific Northwest to live with her father, she meets the reclusive Ed', list_id: list_two.id)