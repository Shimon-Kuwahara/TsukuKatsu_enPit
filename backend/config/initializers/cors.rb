# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '127.0.0.1:4000',
            'localhost:4000',
            '127.0.0.1:4001',
            'localhost:4001',
            'tsukukatsu-test.vercel.app',
            'tsukukatsu-company.vercel.app',
            /\Atsukukatsu-.*\.vercel\.app\z/

    resource '*',
             headers: :any,
             expose: %w[access-token uid client],
             methods: %i[get post put patch delete options head],
             credentials: true
  end
end
