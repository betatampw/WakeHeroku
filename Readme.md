# About

This application causes the low traffic applications remain active, not allowing them to sleep.

## Using

    $ git clone https://github.com/Juev/wake-heroku.git
    $ cd wake-heroku

Then edit worker.rb, changing the url or adding new rules for other applications. Example:

    include Clockwork

    every(20.minutes, 'Fetch data from meta-info') do
      Net::HTTP.get(URI('http://meta-info.heroku.com'))
      Net::HTTP.get(URI('http://asdad-sdff.heroku.com'))
      Net::HTTP.get(URI('http://sfsf-werw-wr.heroku.com'))
    end    

If required, it is possible to change the time of the survey. In this example, 20 minutes.

    $ git commit -a -m "New changes"
    $ heroku apps:create
    $ git push heroku master
    $ heroku ps:scale web=0 clock=1
    
Done!

Now the application is free, it works by polling every 20 minutes other applications with web workers, not allowing them to fall asleep.
