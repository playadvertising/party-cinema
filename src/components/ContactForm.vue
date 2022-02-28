<template>
    <div class="slanted">
    <div class="max-w-4xl mx-auto">
      
        <div class="px-4">
          <h3 class="pt-4 text-4xl md:text-5xl font-medium 
          leading-6 text-gray-600">
            Get in touch.</h3>
        </div>
      
    
        <form action="https://api.form-data.com/f/vhwglzikey8cbjkhgis4kn"
          method="post">
          <!-- honeypot -->
          <input type="text" name="xx_password" class="hidden" tabindex="-1" 
          autocomplete="off">
          <div class="overflow-hidden text-gray-700">
            <div class="px-4 py-5">
              <div class="grid grid-cols-8 gap-y-6 gap-x-3">
                <div class="col-span-4">
                  <input required type="text" placeholder="Name" name="name" id="name" 
                  autocomplete="given-name" 
                  class="mt-1 placeholder-gray-900 focus:ring-yellow-500 
                  bg-gray-300 focus:border-red 
                  block h-14 w-full border-gray-300" />
                </div>

                <div class="col-span-4">
                  <input required type="text" placeholder="Email" name="email-address" 
                  id="email-address" autocomplete="email" 
                  class="mt-1 placeholder-gray-900 focus:ring-yellow-500 
                  bg-gray-300 focus:border-red block h-14 w-full border-gray-300" />
                </div>

                <div class="col-span-4">
                  <input required type="text" placeholder="Phone" name="phone" id="phone" 
                  autocomplete="phone" 
                  class="mt-1 placeholder-gray-900 focus:ring-yellow-400 
                  bg-gray-300 focus:border-red block h-14 w-full border-gray-300" />
                </div>

                <div class="col-span-4">
                  <input required type="text" placeholder="Subject" name="subject" 
                  id="subject" autocomplete="subject" 
                  class="mt-1 placeholder-gray-900 focus:ring-yellow-500 
                  bg-gray-300 focus:border-red block h-14 w-full border-gray-300" />
                </div>

                <div class="col-span-8">
                  <textarea required placeholder="Message" type="text" name="message" 
                  id="message" autocomplete="message" 
                  class="mt-1 placeholder-gray-900 focus:ring-yellow-500 
                  bg-gray-300 focus:border-red block h-24 w-full border-gray-300 " />
                </div>

              </div>
            </div>
            <div class="px-4 py-3 flex justify-between sm:px-6">
              <a class="text-2xl" href="tel:1-888-853-0053">1-888-853-0053</a>
              <button type="submit" 
              class="inline-flex justify-center py-4 px-8 border border-transparent 
              shadow-sm text-sm font-medium 
              rounded-full text-black bg-yellow-400 hover:bg-yellow-200 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red">
                Submit <span> &rarr;</span>
              </button>
            </div>
          </div>
        </form>
      
    </div>

  <div class="hidden sm:block" aria-hidden="true">
    <div class="py-5">
      <div class="border-t border-gray-100" />
    </div>
  </div>
</div>

</template>
<script>

export default {
  
  data: function () {
    return {
      
    }
  },
}
</script>
<style scoped>
  .slanted {
    background-image: linear-gradient(352deg, #f2f2f3 70%, #ffffff calc(70% + 2px)) 
  }
</style>