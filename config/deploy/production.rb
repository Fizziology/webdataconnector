set :keep_releases, 4
set :rails_env, "amazon"
set :rack_env, "amazon"

#server '52.91.163.132', roles: %w{app web}, ssh_options: { user: 'deploy', forward_agent: true }
server '54.211.3.191', roles: %w{app web}, ssh_options: { user: 'deploy', forward_agent: true }
