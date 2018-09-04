# Uploads with Shrine

This is an example setup using Rails 5 in API mode, handling uploaded files via Shrine.

It demonstrates image manipulation using the fast libvips library. It does this in the background using Sidekiq.

It shows how to upload to S3 or Digital Ocean Spaces.

It comes with a systemd script for running Sidekiq as a managed process.

Last it has a UI written with NuxtJS.

If you'd like to read the details, head over to [Medium](https://medium.com/@toddbaur/happy-users-uploading-files-with-rails-5-shrine-and-vue-js-bbcc470a327f)!