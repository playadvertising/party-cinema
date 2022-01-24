<template>
  <div class="font-glasgow">
   
    <slot/>
  </div>
</template>
 
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
