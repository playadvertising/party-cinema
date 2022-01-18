<template>
<div class="bg-red">
    <div class="md:grid md:grid-cols-3">
      <div class="md:col-span-1">
        <div class="px-4 xl:pl-48">
          <h3 class="md:pt-12 pt-4 text-2xl md:text-4xl font-medium leading-6 text-white">Get in touch.</h3>
          
          <span class="text-white text-2xl ">
            <a href="tel:+1-888-853-0053">1-888-853-0053</a>
          </span>
        </div>
      </div>
      <div class="mt-5 md:mt-10 p-4 md:col-span-2">
        <form action="https://api.form-data.com/f/vhwglzikey8cbjkhgis4kn"
      method="post">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6">
                  <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" name="name" id="name" autocomplete="given-name" class="mt-1 focus:ring-yellow-500 focus:border-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6">
                  <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                  <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 focus:ring-yellow-500 focus:border-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6">
                  <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                  <input type="text" name="phone" id="phone" autocomplete="phone" class="mt-1 focus:ring-yellow-400 focus:border-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6">
                  <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
                  <input type="text" name="subject" id="subject" autocomplete="subject" class="mt-1 focus:ring-yellow-500 focus:border-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6">
                  <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                  <textarea type="text" name="message" id="message" autocomplete="message" class="mt-1 focus:ring-yellow-500 focus:border-red block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red">
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
</template>
<script>
export default {
  data: function () {
    return {
      
    }
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>