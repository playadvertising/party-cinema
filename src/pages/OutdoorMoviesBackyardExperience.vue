

  
    








  
  
  

<template>
  <Layout>
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-white overflow-hidden ">
  <div class="max-w-7xl mx-auto">
      
 
      <Nav @scroll="scrollToBottom()" class="z-10 max-w-5xl mx-auto mb-4 bg-white"></Nav>
 
        
      
      <div class="relative bg-be bg-cover bg-no-repeat
          overflow-hidden">
        <div class="absolute top-0 opacity-75 h-full w-full bg-gradient-to-tl from-yellow-200 to-red"></div>
            <div class="relative z-20 mt-10 py-20 md:py-36 lg:py-48 max-w-2xl
            px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div class="text-white z-10">
                <h1 class="text-4xl tracking-tight
                font-extrabold sm:text-5xl md:text-6xl">
                  <span class="block">
                  Backyard Experience
                    </span>
                </h1>
                
                </div>
                <div class="mt-5 flex">
                  <div @click="scrollToBottom()" class="mt-3 sm:mt-0">
                    <a href="#" class="w-full flex items-center 
                    justify-center
                    border border-transparent 
                    text-bold font-bold 
                    rounded-full text-red bg-py 
                    hover:bg-white py-4 md:text-xl px-10">
                      Book Us Today <span class="pb-2 pl-2">&darr;</span>
                    </a>
                  </div>
                </div>
              
            </div>
          
        <div class="absolute top-4 right-4 flex flex-row gap-x-4">
            <a href="https://www.facebook.com/partycinemas/">
              <div class="w-8 md:w-12 bg-gradient-to-tl from-yellow-200 to-red rounded opacity-75">
                <g-image alt="facebook link" 
                class="p-1 object-center w-full h-full" 
                src="../facebook.png"/>
              </div>
            </a>
            <a href="https://www.instagram.com/partycinemas/?hl=en">
              <div class="w-8 md:w-12 bg-gradient-to-tl from-yellow-200 to-red rounded opacity-75">
                <g-image alt="instagram link" 
                class="p-1 object-center w-full h-full" 
                src="../instagram.png"/>
              </div>
            </a>
            </div>
    </div>
  
  </div>

</div>
<div class="py-12 bg-white">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    
      <p class="mt-2 text-4xl leading-8 font-bold text-gray-700 sm:text-4xl">
Enjoy the red carpet treatment at home!      </p>
       <p class="my-4 leading-8 max-w-2xl text-2xl text-gray-400">
                           You've decided to have an event at your home or cottage. Perhaps it's a backyard movie, a UFC fight, a concert, or maybe some fun family video and photo memories.
      </p> 
      <a class="text-gray-700 cursor-pointer hover:text-red font-bold text-xl">Learn more on our FAQ's page <span>&rarr;</span></a>
    
  </div>
</div>

<div class="relative flex py-5">
      <span class="w-10/12 invisible lg:visible mx-auto border-t-2 border-gray-800"></span>
    </div>
    <div class="container px-5 py-12 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/4 p-4 w-1/2">
          <a class="block relative h-48 rounded overflow-hidden">
            <g-image 
            alt="Sunny backyard with long pool, canopy, and large inflatable screen" 
            class="object-cover object-center w-full h-full block" 
            src="../odm5.jpg"/>
          </a>
        </div>
        <div class="lg:w-1/4 p-4 w-1/2">
          <a class="block relative h-48 rounded overflow-hidden">
            <g-image 
            alt="Family sitting on a counh in a backyard watching a large screen" 
            class="object-cover object-center w-full h-full block" 
            src="../odm6.jpg"/>
          </a>
        </div>
        <div class="lg:w-1/4 p-4 w-1/2">
          <a class="block relative h-48 rounded overflow-hidden">
            <g-image 
            alt="Front on shot of a large inflatable screen in a green backyard" 
            class="object-cover object-center w-full h-full block" 
            src="../odm-by1 (1).jpg"/>
          </a>
        </div>
        <div class="lg:w-1/4 p-4 w-1/2">
          <a class="block relative h-48 rounded overflow-hidden">
            <g-image 
            alt="Family on back porch watching hockey on a giant television" 
            class="object-cover object-center w-full h-full block" 
            src="../odm-by1 (2).jpg"/>
          </a>
        </div>
      </div>
    </div>


        <video class="mt-8" controls>
        <source src="../outdoor-movie-rentals.mp4" type="video/mp4">
  <p>Your browser doesn't support HTML5 video.</p>
</video>
     
<div class="flex flex-wrap pt-24 justify-center">
<div class="md:max-w-lg lg:max-w-md px-4 py-4 my-auto hover:-translate-y-1 ease-in transform duration-200 cursor-pointer">
    
    <div 
    @click="s1 = !s1"
    class="relative bg-gray-50 md:bg-white md:shadow-xl rounded-lg mb-6 ">
      
      
        <div 
        class="md:flex-shrink-0">

          <g-image 
          src="../odm6.jpg" 
          alt="uploaded cover image"
          class="object-cover h-full w-full 
          rounded-lg rounded-b-none">
          </g-image>
        </div>
      
      
      <div class="py-1 ">
        <div class="p-4">
          <h2 class="font-bold mb-4 mt-2 
          text-2xl text-gray-800 ">
          DIY
          </h2> 
          <span>For the Tech-Savvy Family<br/>Starting at $345 + HST</span>
          <p class="text-gray-500 hover:text-red">
            More Details<span>&rarr;</span>
          </p>
        </div>
      </div>

      <div 
      v-if="s1 ===  true"
      class="absolute bg-gray-100 leading-8 pl-8 pt-4 top-0 text-gray-900 select-none
      h-full w-full rounded-md z-10">
        <ul class="list-disc">
          <li>Backyard Series Inflatable Screen</li>
          <li>HD Projection</li>
          <li>Professional Sound</li>
          <li>HDMI Input for your Devices (Laptop, Gaming System, etc)</li>
          <li>Incidental Equipment (cables etc)</li>
          <li>Blu-Ray/DVD Player (if Required)</li>
          <li>Overnight Rental</li>
          <li>Equipment is dropped off with a tutorial provided</li>
        </ul>
      </div>
    </div> 
  
  </div>
  <div 
  @click="s2 = !s2"
  class="md:max-w-lg lg:max-w-md px-4 py-4 my-auto hover:-translate-y-1 ease-in transform duration-200 cursor-pointer">
    <div class="bg-gray-50 md:bg-white md:shadow-xl rounded-lg mb-6 ">
      
      
        <div 
        class="md:flex-shrink-0">

          <g-image 
          src="../odm5.jpg" 
          alt="uploaded cover image"
          class="object-cover h-full w-full rounded-lg rounded-b-none">
          </g-image>
        </div>
      
      
      <div class="py-1 ">
        <div class="px-4 py-10">
          
          <h2 class="font-bold mb-4 mt-2 
          text-2xl text-gray-800 ">
          Premium Service
          </h2> 
          <span>Starting at $600 + HST<br/>
          Full-Service Experience - Sit Back & Enjoy the Show!</span>
          <p class="text-gray-500 hover:text-red">
            More Details<span>&rarr;</span>
          </p>
        </div>
      </div>
    </div> 
    <div 
      v-if="s2 ===  true"
      class="absolute bg-gray-100 leading-8 pl-8 pt-4 top-0 text-gray-900 select-none
      h-full w-full rounded-md z-10 ">
        <ul class="list-disc">
          <li>Upgraded Commercial Series Inflatable Screen</li>
          <li>Pro HD Projection (minimum 6,000 lumens)</li>
          <li>Hi-Fi Professional Sound</li>
          <li>HDMI Input for your Devices (Laptop, Gaming System, etc)</li>
          <li>Blu-Ray Player (if Required)</li>
          <li>Incidental Equipment (cables etc)</li>
          <li>Complete Set-Up/Take Down</li>
          <li>One Film Duration (Additional Time Available)</li>
          <li>Portable Power Available</li>
        </ul>
      </div>
  </div>
  <div 
  @click="s3 = !s3"
  class="md:max-w-lg lg:max-w-md px-4 py-4 my-auto hover:-translate-y-1 ease-in transform duration-200 cursor-pointer">
    
      <div class="bg-gray-50 md:bg-white md:shadow-xl rounded-lg mb-6 ">
        <div class="md:flex-shrink-0">

          <img src="../odm-by1 (1).jpg" alt="uploaded cover image"
            class="object-cover h-full w-full rounded-lg rounded-b-none">

        </div>
    
      
      <div class="py-1 ">
        <div class="p-4">
      
          <h2 class="font-bold mb-4 mt-2 
          text-2xl text-gray-800 ">
          Red Carpet Experience
          </h2> 
          <span>Starting at $880 + HST <br/>The Ultimate Full-Service Backyard Movie Night</span>
          <p class="text-gray-500 hover:text-red">
            More Details<span>&rarr;</span>
          </p>
        </div>
      </div>
      </div>
      <div 
      v-if="s3 ===  true"
      class="absolute bg-gray-100 leading-8 pl-8 pt-4 top-0 text-gray-900 select-none
      h-full w-full rounded-md z-10 ">
        <ul class="list-disc">
          <li>Upgraded Commercial Series Inflatable Screen</li>
          <li>Pro HD Projection (minimum 6,000 lumens)</li>
          <li>Hi-Fi Professional Sound</li>
          <li>HDMI Input for your Devices (Laptop, Games, etc)</li>
          <li>Blu-Ray Player or Media Device (if Required)</li>
          <li>Incidental Equipment</li>
          <li>Popcorn Machine w/Unlimited Popcorn</li>
          <li>Red Carpet Entrance w/Stanchions (Space Permitting)</li>
          <li>Portable Power (if Required)</li>
          <li>Delivery, Set Up, Operation, Take Down</li>
        </ul>
      </div>
  </div>
</div>

<div class="flex py-5 items-center">
    <div class="flex-grow border-t border-gray-200"></div>
</div>

    
    <div class="py-12 bg-white text-center">
      <g-image 
      class="mx-auto"
      alt="Party cinema" 
      src="~/party-cinemas-thumbnail-logo.png" 
      width="60" />
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <p class="mt-2 text-4xl leading-8 font-bold text-gray-700 sm:text-4xl">
        So many parties, so many happy clients.</p>
        <p class="my-4 leading-8 max-w-2xl text-2xl text-gray-400">
        The proof is in the pudding, so they say. For close to 20 years, Party Cinemas has been entertaining crowds of all sizes – and it’s starting to add up!
        </p>
        <div class="text-red font-extrabold text-4xl">1100</div>
        <div class="mb-4 leading-8 font-bold text-xl text-gray-800">
          Video dance parties
        </div>
        <div class="text-red font-extrabold text-4xl">2300</div>
        <div class="mb-4 leading-8 font-bold text-xl text-gray-800">
          Drive-in movie nights
        </div>
        <div class="text-red font-extrabold text-4xl">All of them</div>
        <div class="mb-4 leading-8 font-bold text-xl text-gray-800">
          Happy clients
        </div>
    </div>
  </div>


  <!-- testimonial area -->
  
  <div class="mb-4 py-12 border-2 border-gray-200 rounded-lg max-w-2xl mx-auto">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    
      <p class="mt-2 text-lg leading-8 font-bold text-gray-700">
       Testimonial from: Oliver Ward (Oliwoodfilms)
      </p>
       <p class="my-4 max-w-2xl text-base text-gray-400">
        "I run a film festival in Huntsville called CineMuskoka. Anthony and his team installed their larger than life 40 foot inflatable screen right in the center of town in our Park. It was incredible! Amazing quality and a spectacle for passersby. The screen itself acted as advertising for our event. I can highly recommend Party Cinemas as a professional, easy to work with company. We will definitely be using them again."
        </p>  
   
  </div>
</div>

<div class="mb-4 py-12 border-2 border-gray-200 rounded-lg max-w-2xl mx-auto">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    
      <p class="mt-2 text-lg leading-8 font-bold text-gray-700">
       Testimonial from: Geoff And Dena Silverberg
      </p>
       <p class="my-4 max-w-2xl text-base text-gray-400">
        "Wow! what an incredible night. Thank you Anthony for making my son's 16th birthday a one of kind outstanding event! Anthony showed up early, ensured everything was working and returned promptly to remove. He was gracious and responded to every question I had regarding the event. A truly wonderful one of kind birthday! Thank you Anthony and Party Cinemas!"      
          </p>  
   
  </div>
</div>

<div class="mb-8 py-12 border-2 border-gray-200 rounded-lg max-w-2xl mx-auto">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    
      <p class="mt-2 text-lg leading-8 font-bold text-gray-700">
       Testimonial from: Halton Agricultural Society
      </p>
       <p class="my-4 max-w-2xl text-base text-gray-400">
      "Party Cinemas was a pleasure to work with. Excellent service from bookings, day of events and follow up! Thank you for making our first year of Flicks @ the Fairgrounds a success!"
       </p>  
   
  </div>
</div>



<ContactForm></ContactForm>
<Footer></Footer>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    
 
  </Layout>
</template>

<script>
import Nav from "../components/Nav.vue"
import ContactForm from "../components/ContactForm.vue"
import Footer from "../components/Footer.vue"
export default {
  components: { Nav, ContactForm,Footer },
  metaInfo: {
    title: 'Outdoor Movies'
  },
  data: function () {
    return {
      s1: false,
      s2: false,
      s3: false,
    }
  },
  methods: {
    scrollToBottom() {
      window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
  },
}
</script>




