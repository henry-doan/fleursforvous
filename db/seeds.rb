User.create(email: 'admin@test.com', password: 'password')

sizes = ['small', 'medium', 'large', 'xlarge', 'custom']
occasions = ['birthday', 'romance', 'graduation', 'wedding', 'just because']

50.times do
  Submission.create(
    fullName: Faker::FunnyName.two_word_name, 
    occasion: occasions.sample, 
    phone: Faker::PhoneNumber.cell_phone, 
    email: "#{Faker::Science.element}@email.com", 
    dateNeeded: Faker::Date.forward(days: 23), 
    timeNeeded: Faker::Time.forward(days: 23, period: :morning), 
    colors: Faker::Color.color_name, 
    specialRequirements: Faker::Quotes::Shakespeare.hamlet_quote, 
    priceRange: sizes.sample, 
    flowers: 'Roses, Lily, Leaves, and Tulips', 
    complete: Faker::Boolean.boolean
  )
end

puts "#{User.all.count} users"
puts "#{Submission.all.count} Submissions"