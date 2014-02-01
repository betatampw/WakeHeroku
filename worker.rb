require 'net/http'
require 'clockwork'

include Clockwork

every(20.minutes, 'Fetch data from meta-info') do
  Net::HTTP.get(URI('http://keytest-node.herokuapp.com'))
end