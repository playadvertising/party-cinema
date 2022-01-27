<template>
  <Layout>
    <OdmNav @scroll="scrollToBottom()" class="z-10 max-w-5xl mx-auto mb-4 bg-white"></OdmNav>
    <div class="relative bg-outdoor-movie bg-cover bg-no-repeat
    overflow-hidden">
  <div class="max-w-5xl mx-auto">
      <div class="mt-10 pb-5 md:pb-10 lg:pb-20 mx-auto max-w-7xl 
      px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="text-center">
          <h1 class="text-4xl tracking-tight font-extrabold 
          text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block text-py uppercase drop-shadow">
              Party Cinemas</span>
          </h1>
          <h2 class="font-extrabold text-white sm:mt-5 
          sm:text-lg mx-auto md:text-2xl lg:mx-0 uppercase">
            Your outdoor movie company
          </h2>
          <div class="mt-5 sm:mt-8 sm:flex justify-center">
            <div @click="scrollToBottom()" class="mt-3 sm:mt-0 sm:ml-3">
              <a href="#" class="w-full flex items-center 
              justify-center px-8 py-3 
              border border-transparent 
              text-bold font-bold 
              rounded text-black bg-py 
              hover:bg-yellow-200 md:py-4 md:text-xl md:px-10 uppercase">
                book now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="py-6 md:py-10 lg:py-12 bg-emerald text-gray-800">
          <div class="flex justify-center gap-4">
          <a href="https://www.facebook.com/partycinemas/">
              <div class="w-8 md:w-12 bg-py rounded">
                <g-image alt="" class="p-1 object-center w-full h-full" src="../facebook.png"/>
              </div>
          </a>
          <a href="https://www.instagram.com/partycinemas/?hl=en">
              <div class="w-8 md:w-12 bg-py rounded">
                <g-image alt="" class="p-1 object-center w-full h-full" src="../instagram.png"/>
              </div>
          </a>
          </div>
  </div>

  <main class="py-12 bg-py text-gray-900 grid gap-y-4">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <p class="mt-2 text-5xl font-extrabold
      md:text-7xl">
        WE ARE PARTY<br/> CINEMAS!
      </p>
       <p class="mt-4 max-w-2xl md:text-lg lg:mx-auto">
         Our passion is entertainment. The Outdoor Movie rental service we offer is our driving force for summertime – or any time – fun! Warm summer nights, not a cloud in the sky. Enjoy quality family time, or a night out with someone special. No matter which way you write the story, an Outdoor Movie experience really is an exceptional way to spend an evening weather it’s in a traditional park setting or our Drive-In movie experience. 
      </p> 
    </div>
  </div>
    <!-- hr -->
    <div class="relative flex py-5">
      <span class="w-5/12 invisible lg:visible mx-auto border-t-2 border-gray-800"></span>
  </div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
        WHO WE ARE.
      </h3>
       <p class="mt-4 max-w-2xl md:text-lg lg:mx-auto">
         Our company was born in the entertainment world. We have been entertaining families, friends and co-workers for over two decades. Other products we offer are Outdoor Movie events, DJ Services and Corporate Audio Visual Rentals & Event Production.

      </p> 
    </div>
  </div>


<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
        WHY CHOOSE US?
      </h3>
       <p class="mt-4 max-w-2xl md:text-lg lg:mx-auto">
        With our extensive experience in the industry, our use of the most reliable and trusted brands of equipment and our use of highly skilled staff, we are able to provide our customers with the absolute best experience possible. Who doesn’t want that? You and your audience deserve the best.
      </p> 
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
        THEY SAID WHAT?
      </h3>
       <p class="mt-4 max-w-2xl md:text-lg lg:mx-auto">
         Don’t take it from us! “… I enjoy working with you tremendously and truly believe you offer a quality event that is unparalleled in our community” and “…The music was fun, the videos were appropriate (which I appreciated), and the kids enjoyed the “photo booth” aspect up on the big screen.  Thank you for a wonderful event – we’ll see you next time!”
      </p> 
    </div>
  </div>
  </main>


  <!-- services teal part -->
  <div class="py-12 bg-emerald text-white grid gap-y-4">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <p class="mt-2 text-5xl font-extrabold
      md:text-7xl">
        THE SERVICE WE <br/> PROVIDE
      </p>
       <p class="mt-4 max-w-2xl md:text-lg lg:mx-auto">
          Inflatable screens of any size, HD projection, full range sound systems and portable power. We are your one stop shop for yor next Outdoor Movie screening event! For more information and a comparison of our screens click here.
      </p> 
    </div>
    
  </div>
<!-- hr -->
    <div class="relative flex py-5">
      <span class="w-5/12 invisible lg:visible mx-auto border-t-2 border-white"></span>
  </div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h3 class="mt-2 text-xl font-bold tracking-wide sm:text-2xl">
        SCREEN SIZES
      </h3>
       <p class="mt-2 max-w-2xl md:text-lg lg:mx-auto">
          There are three main screen sizes that are used for 90% of Outdoor Movie Rentals. Screen sizes are measured on the width of the projection surface (white area of screen). Our ‘small’ screen is the 16′ wide. This screen is great for backyards, schools or small corporate events. We do not recommend this screen for Drive-In events. Next up from that we have our very popular 24′ Outdoor Movie screen. This size is ideal for almost any event and suitable for up to roughly 600 participants. The 24′ screen is the smallest screen size you would want for your drive-in event. On the rather large-and-in-charge side, we have our signature 40′ screen. This is going to provide you with a definite wow factor and is suitable for nearly any crowd size you can dream up. If you’re hosting a pop-up drive-in movie, this is the screen we will advise you to use for many important reasons. We do have a complete range of other sizes as well, so if these don’t suit you speak up!
      </p> 
    </div>
  </div>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h3 class="mt-2 text-xl font-bold tracking-wide sm:text-2xl">
        PROJECTION EQUIPTMENT
      </h3>
       <p class="mt-2 max-w-2xl md:text-lg lg:mx-auto">
          These days, movies are made to look more real than life itself! Party Cinemas uses the absolute best in cinema projection. We use Christie Projectors almost exclusively for all of our Outdoor Movie rental service productions. High Definition you ask? That is a resounding yes! HD Outdoor Movies for the win.
      </p> 
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h3 class="mt-2 text-xl font-bold tracking-wide sm:text-2xl">
        BACK-UP EQUIPMENT
      </h3>
       <p class="mt-2 max-w-2xl md:text-lg lg:mx-auto">
          With any live events everything must work. No questions asked. For this reason, we bring back up equipment of the most crucial components to all of our bookings. This helps ensure that you are provided with the most reliable service. Oh yes, the show will go on!  
      </p> 
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h3 class="mt-2 text-xl font-bold tracking-wide sm:text-2xl">
        SOUND SYSTEM
      </h3>
       <p class="mt-2 max-w-2xl md:text-lg lg:mx-auto">
        Now that we’ve covered the video aspect, let’s talk about the sound! Asides from the incredible picture quality you’re going to want to hear what’s happening too! Our sound systems are all top level JBL and QSC components. When the action happens, you’ll be able to see, hear and feel the movie just like the theatre! 
        <br/>
        For our Drive-In Movie services, we transmit the audio via FM radio to the participants vehicles. 
      </p> 
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h3 class="mt-2 text-xl font-bold tracking-wide sm:text-2xl">
        POWER
      </h3>
       <p class="mt-2 max-w-2xl md:text-lg lg:mx-auto">
        Unless otherwise specified, all of our Outdoor Movie events come equipped with state of the art Honda inverter generators. These generators provide your screening with whisper quiet operation, and superb reliability. Not only that, this means we can set up anywhere!  Additional power is available to run other services for your event on request.
      </p> 
    </div>
  </div>
  </div>
  



  <div class="py-12 bg-white text-gray-900 grid">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <p class="mt-2 text-4xl font-bold
      md:text-6xl uppercase">
        just some of our <br/> amazing clients
      </p>
    </div>
    <div class="w-full">
      <g-image class="object-inside" src="../logos-1.jpg" alt="three logos: Amica senior lifestyles, Bell, Brock University"/>
    </div>
    <div class="w-full">
      <g-image class="object-inside" src="../logos-2.jpg" alt="three logos: City of Burlington, Canadian Cancer Society, Town of Halton Hills"/>
    </div>
    <div class="w-full">
      <g-image class="object-inside" src="../logos-3.jpg" alt="three logos: City of Brampton, University of Guelph, Lilly"/>
    </div>
    <div class="w-full">
      <g-image class="object-inside" src="../logos-4.jpg" alt="three logos: Jays Care  Foundation, Pepsico, JDRF"/>
    </div>
    <div class="w-full">
      <g-image class="object-inside" src="../logos-5.jpg" alt="three logos: Western University, York University, University of Waterloo"/>
    </div>
  </div>
  </div>

  <div class="py-12 bg-gray-800 text-white grid gap-y-4">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <p class="mt-2 text-5xl font-extrabold
      md:text-7xl">
        CHECK US OUT<br/> IN ACTION
      </p>
       <p class="mt-4 max-w-2xl md:text-xl lg:mx-auto">
        We use only Airscreen inflatable movie screens for rent in our inventory. Considered the number one Outdoor Movie screen on the market. They are rated for winds up up to 60kph and are made from the highest quality material to withstand weekly use in the screen rental business. Great piece of mind for your important event.      </p> 
    </div>
    <div class="relative flex py-5">
      <span class="w-5/12 invisible lg:visible mx-auto border-t-2 border-white"></span>
    </div>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-12 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 p-4 w-1/2">
        <a class="block relative h-48 rounded overflow-hidden">
          <g-image alt=""
           class="object-cover object-center w-full h-full block" 
           src="../odm1.jpg"/>
        </a>
      </div>
      <div class="lg:w-1/4 p-4 w-1/2">
        <a class="block relative h-48 rounded overflow-hidden">
          <g-image alt="" 
          class="object-cover object-center w-full h-full block" 
          src="../odm2.jpg"/>
        </a>
      </div>
      <div class="lg:w-1/4 p-4 w-1/2">
        <a class="block relative h-48 rounded overflow-hidden">
          <g-image alt="" 
          class="object-cover object-center w-full h-full block" 
          src="../odm3.jpg"/>
        </a>
      </div>
      <div class="lg:w-1/4 p-4 w-1/2">
        <a class="block relative h-48 rounded overflow-hidden">
          <g-image alt="" 
          class="object-cover object-center w-full h-full block" 
          src="../odm4.jpg"/>
        </a>
      </div>
      <div class="lg:w-1/4 p-4 w-1/2">
        <a class="block relative h-48 rounded overflow-hidden">
          <g-image 
          alt=""
          class="object-cover object-center w-full h-full block" 
          src="../odm5.jpg"/>
        </a>
      </div>
      <div class="lg:w-1/4 p-4 w-1/2">
        <a class="block relative h-48 rounded overflow-hidden">
          <g-image alt="" 
          class="object-cover object-center w-full h-full block" 
          src="../odm6.jpg"/>
        </a>
      </div>
      <div class="lg:w-1/4 p-4 w-1/2">
        <a class="block relative h-48 rounded overflow-hidden">
          <g-image alt="" 
          class="object-cover object-center w-full h-full block" 
          src="../odm7.jpg"/>
        </a>
      </div>
      <div class="lg:w-1/4 p-4 w-1/2">
        <a class="block relative h-48 rounded overflow-hidden">
          <g-image alt="" 
          class="object-cover object-center w-full h-full block" 
          src="../odm8.jpg"/>
        </a>
      </div>
    </div>
  </div>
</section>
  </div>
  <div class="bg-red">
    <div class="md:grid md:grid-cols-3">
      <div class="md:col-span-1 mx-auto">
        <div class="px-4">
          <h3 class="md:pt-12 pt-4 pb-8 text-4xl md:text-5xl font-medium 
          leading-6 text-white">
            Get in touch.</h3>
          
          <span class="text-white text-3xl">
            <a href="tel:+1-888-853-0053">1-888-853-0053</a></span>
            <div class="flex gap-4 pt-8">
            <a href="https://www.facebook.com/partycinemas/">
              <div class="w-8 md:w-12 bg-yellow-400 rounded">
                <g-image alt="facebook link" 
                class="p-1 object-center w-full h-full" 
                src="../facebook.png"/>
              </div>
            </a>
            <a href="https://www.instagram.com/partycinemas/?hl=en">
              <div class="w-8 md:w-12 bg-yellow-400 rounded">
                <g-image alt="instagram link" 
                class="p-1 object-center w-full h-full" 
                src="../instagram.png"/>
              </div>
            </a>
            </div>
            <div class="flex pt-8">
              <g-link to="/">
                <button 
                class="inline-flex w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded text-black bg-yellow-400 hover:bg-yellow-200 ">
                  Visit our party cinemas homepage
                </button>
              </g-link>
            </div>
            <!-- <div class="flex pt-8">
              <button class="inline-flex w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded text-black bg-yellow-400 hover:bg-yellow-200 ">
                Visit our video dance party page
              </button>
            </div> -->
        </div>
      </div>
      <div class="mt-5 md:mt-10 p-4 md:col-span-2 max-w-4xl">
        <form action="https://api.form-data.com/f/vhwglzikey8cbjkhgis4kn"
          method="post">
          <div class="g-recaptcha"
            data-sitekey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR">
          </div>
          <!-- honeypot -->
          <input type="text" name="xx_password" class="hidden" tabindex="-1" autocomplete="off">
          <div class="shadow overflow-hidden sm:rounded-md text-gray-700">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6">
                  <label for="name" class="block text-sm font-medium">Name</label>
                  <input type="text" name="name" id="name" autocomplete="given-name" class="mt-1 focus:ring-yellow-500 focus:border-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6">
                  <label for="email-address" class="block text-sm font-medium">Email address</label>
                  <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 focus:ring-yellow-500 focus:border-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6">
                  <label for="phone" class="block text-sm font-medium">Phone</label>
                  <input type="text" name="phone" id="phone" autocomplete="phone" class="mt-1 focus:ring-yellow-400 focus:border-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6">
                  <label for="subject" class="block text-sm font-medium">Subject</label>
                  <input type="text" name="subject" id="subject" autocomplete="subject" class="mt-1 focus:ring-yellow-500 focus:border-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6">
                  <label for="message" class="block text-sm font-medium">Message</label>
                  <textarea type="text" name="message" id="message" autocomplete="message" class="mt-1 focus:ring-yellow-500 focus:border-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded text-black bg-yellow-400 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

  <div class="hidden sm:block" aria-hidden="true">
    <div class="py-5">
      <div class="border-t border-red" />
    </div>
  </div>

  
  
  
</div>
<!-- hr -->
    
  <!-- <div class="lg:inset-y-0 lg:right-0 lg:w-1/2">
    <g-image class="h-24 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="../inflatable-screen-rental.jpg" alt=""/>
  </div> -->
</div>
    
      <div class="bg-gray-800 text-center text-gray-200 pb-4">
        <div class="text-sm">Copyright <span>&#169;</span> 
        2020 Party Cinemas. All rights reserved
        </div>
      </div>
    
  

  </Layout>
</template>

<script>
import OdmNav from "../components/OdmNav.vue"
export default {
  components: { OdmNav },
  metaInfo: {
    title: 'Outdoor Movies'
  },
  methods: {
    scrollToBottom() {
      window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
  },
}
</script>



