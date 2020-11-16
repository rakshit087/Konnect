<template>
  <div
    class="bg-offWhite w-full mt-2 mb-2 flex flex-col h-32 border-2 border-dashed border-seaGreen"
  >
  <Comments
      v-if="comment"
      @close="closeComments()"
      :krateId = "this.krateData._id"
    />
    <div class="flex h-32 w-full">
      <!-- CONTAINS PROFILE PICTURE -->
      <div class="h-20 w-20 my-2 mx-3"><ProfilePicture /></div>
      <!-- CONTAINS KRATE INFO -->
      <div class="flex flex-col w-4/5 ml-4">
        <div class="h-8 pt-2">
          <p class="font-bold text-brightRed">{{ krateData.sender.name }}</p>
        </div>
        <div class="h-16 mt-2 flex items-start text-darkBlue">
          {{ krateData.content }}
        </div>
        <!-- CONTAINS COMMENT BOX -->
        <div class="h-8 flex items-start text-darkBlue mb-1">
          <button
            class="mr-2 flex justify-between items-center w-8 hover:text-brightRed"
            @click="showComments()"
          >
            <i class="far fa-comment-alt"></i>
            <p class="text-sm">{{ krateData.commentCount }}</p>
          </button>
        </div>
      </div>
      <!-- CONTAINS UPVOTE AND DOWNVOTE -->
      <div class="w-20 h-32 flex flex-col items-center mt-2 font-bold">
        <button
          class="rounded-full w-8 h-8 hover:text-seaGreen hover:bg-blueBg"
          :class="{ greenC: voted }"
          @click="upvote()"
        >
          <i class="fas fa-chevron-up text-2xl"></i>
        </button>
        <p class="text-darkBlue text-xl">{{ votes }}</p>
        <button
          class="hover:text-brightRed hover:bg-redBg rounded-full w-8 h-8 text-2xl"
          :class="{ redC: downvoted }"
          @click="downvote()"
        >
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import KrateServices from "@/services/KrateServices";
import ProfilePicture from "./ProfilePicture";
import Comments from "./Comments";
export default {
  props: {
    krateData: {
      type: Object
    }
  },
  components: {
    ProfilePicture,
    Comments
  },
  data() {
    return {
      voted: false,
      downvoted: false,
      votes: 0,
      comment: false
    };
  },
  mounted() {
    console.log(this.krateData);
    this.votes = this.krateData.votes;
    if (this.krateData.votedBy.includes(localStorage.getItem("userid"))) {
      this.voted = true;
    }
    if (this.krateData.downVotedBy.includes(localStorage.getItem("userid"))) {
      this.downvoted = true;
    }
  },
  methods: {
    upvote() {
      KrateServices.upvote({
        userid: localStorage.getItem("userid"),
        krateid: this.krateData._id
      });
      if (this.voted) {
        this.votes--;
        this.voted = false;
      } else if (this.downvoted) {
        this.votes += 2;
        this.voted = true;
        this.downvoted = false;
      } else {
        this.votes++;
        this.voted = true;
        this.downvoted = false;
      }
    },
    downvote() {
      KrateServices.downvote({
        userid: localStorage.getItem("userid"),
        krateid: this.krateData._id
      });
      if (this.downvoted) {
        this.votes++;
        this.downvoted = false;
      } else if (this.voted) {
        this.votes -= 2;
        this.voted = false;
        this.downvoted = true;
      } else {
        this.votes--;
        this.downvoted = true;
      }
    },
    showComments() {
      this.comment = true;
    },
    closeComments() {
      this.comment = false;
    }
  }
};
</script>

<style scoped>
.greenC {
  color: #3fc1c9;
}
.redC {
  color: #fc5185;
}
</style>
