<template>
  <div class="bg-offWhite w-full mb-3 flex flex-col h-32 border-2 border-dashed border-seaGreen">
    <div class="flex h-32">
      <!-- CONTAINS PROFILE PICTURE -->
      <div class="h-20 w-20 my-2 mx-3"><ProfilePicture /></div>
      <!-- CONTAINS KRATE INFO -->
      <div class="flex flex-col w-4/5 ml-4">
        <div class="h-8 pt-2">
          <p class="font-bold text-brightRed">{{ krateData.sender.name }}</p>
        </div>
        <div class="h-16 mt-2 flex items-start text-darkBlue">{{ krateData.content }}</div>
        <!-- CONTAINS COMMENT BOX -->
        <div class="h-8 flex items-start text-darkBlue mb-1"><button class="mr-2 flex justify-between items-center w-8 hover:text-brightRed"><i class="far fa-comment-alt"></i><p class="text-sm">0</p></button>
        </div>
      </div>
      <!-- CONTAINS UPVOTE AND DOWNVOTE -->
      <div class="w-20 h-32">
        <button></button>

      </div>
    </div>
  </div>
</template>

<script>
import ProfilePicture from "./ProfilePicture";
export default {
  props: {
    krateData: {
      type: Object
    }
  },
  components: {
    ProfilePicture
  }
};
</script>

<style></style>
