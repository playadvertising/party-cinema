<template>
  <Layout>
  <div class="relative bg-white overflow-hidden ">
  <div>
      
 
      <Nav @scroll="scrollToBottom()" class="z-10 max-w-5xl mx-auto mb-4 bg-white"></Nav>
 
    <div class="relative bg-vdp-faq bg-cover lg:h-screen bg-clip-padding bg-no-repeat
          overflow-hidden">
        <div class="absolute top-0 opacity-75 h-full w-full bg-gradient-to-tl from-yellow-200 to-red"></div>
            <div class="relative z-20 pb-36 lg:pb-56 max-w-4xl mx-auto
            px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div class="text-white z-10">
                <h1 class="text-4xl tracking-tight
                font-extrabold sm:text-5xl md:text-6xl">
                  <span class="block">
                    Frequently Asked Questions. 
                    </span>
                </h1>
                <h2 class="font-bold leading-8 sm:mt-5 
                lg:text-xl text-md">
                  You have questions? We have answers.
                </h2>
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

<div class="py-12 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 flex flex-wrap md:flex-nowrap lg:px-8">
    
      <p class="mt-2 text-4xl pr-4 lowercase leading-10 font-bold text-gray-700 sm:text-4xl">
        WHO IS SUPERVISING THE DANCE?
      </p>
       <p class="my-4 leading-8 max-w-2xl md:text-2xl text-gray-400">
         All Party Cinemas dances are well chaperoned by adults. These chaperones are parents from the local community in which we are hosting each dance and are from the local organizations which Party Cinemas in supporting that evening. In addition to our local chaperones, Party Cinemas may hire security guards and/or police officers at our larger events to ensure an exceptional and safe experience by everyone.
      </p> 
  </div>
</div>

<div class="flex items-center">
  <div class="flex-grow border-t border-gray-200"></div>
</div>

<div class="py-12 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 flex flex-wrap md:flex-nowrap lg:px-8">
    
      <p class="mt-2 text-4xl pr-4 lowercase leading-10 font-bold text-gray-700 sm:text-4xl">
        ARE PARENTS ALLOWED TO STAY?
      </p>
       <p class="my-4 leading-8 max-w-2xl md:text-2xl text-gray-400">
         We always encourage and welcome parents to come inside to see what the dances are all about and to get a feel for if they are good for their child. If you wish to come inside, please let a chaperone know so we can account for you.
      </p> 
  </div>
</div>

<div class="flex items-center">
    <div class="flex-grow border-t border-gray-200"></div>
</div>

<div class="py-12 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 flex flex-wrap md:flex-nowrap lg:px-8">
    
      <p class="mt-2 text-4xl pr-4 lowercase leading-10 font-bold text-gray-700 sm:text-4xl">
        ARE CHILDREN ALLOWED TO LEAVE?
      </p>
       <p class="my-4 leading-8 max-w-2xl md:text-2xl text-gray-400">
         Once inside the dance facility, children are not allowed to leave. If they need fresh air, or need to go outside for any other reason, a chaperone will escort them outside and back into the building. When leaving the dance, children will need to be accompanied by a parent or guardian.
      </p> 
  </div>
</div>

<div class="flex items-center">
    <div class="flex-grow border-t border-gray-200"></div>
</div>

<div class="py-12 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 flex flex-wrap md:flex-nowrap lg:px-8">
    
      <p class="mt-2 text-4xl pr-4 lowercase leading-10 font-bold text-gray-700 sm:text-4xl">
        AUDIO AND VIDEO CONTENT
      </p>
       <p class="my-4 leading-8 max-w-2xl md:text-2xl text-gray-400">
         Party Cinemas takes great steps to ensure your child is viewing appropriate material suitable for their age group. There is no violent, offensive or sexually suggestive content played at our dances. We personally edit each and every music video we receive by blurring out completely any scene which we deem offensive or otherwise inappropriate. If the video is completely offensive, we will only play the audio version of the song or not play the song at all. All audio with or without video is also edited for content. 
      </p> 
  </div>
</div>

<div class="flex items-center">
    <div class="flex-grow border-t border-gray-200"></div>
</div>

<div class="py-12 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 flex flex-wrap md:flex-nowrap lg:px-8">
    
      <p class="mt-2 text-4xl pr-4 lowercase leading-10 font-bold text-gray-700 sm:text-4xl">
        PICKING UP YOUR CHILDREN.
      </p>
       <p class="my-4 leading-8 max-w-2xl md:text-2xl text-gray-400">
         This is extremely important. Parents must come inside to pick up their children. Please advise your children to wait inside of the hall for pick up. No child may leave the dance without a parent/guardian. If your child is given permission to take a bus/walk/taxi home, we require written consent and/or a phone call from the parent – no exceptions.
      </p> 
      
  </div>
</div>

<div class="flex items-center">
    <div class="flex-grow border-t border-gray-200"></div>
</div>
        
    
  </div>
  </div>
  <ContactForm />
  <Footer />
  </Layout>
</template>

<script>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
import ContactForm from "../components/ContactForm.vue";
export default {
  components: { Nav, ContactForm, Footer },
  data: function () {
    return {
      
    }
  },
  methods: {
    scrollToBottom() {
      window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
  },
  metaInfo: {
    title: 'Video Dance Party FAQs'
  }
}
</script>
