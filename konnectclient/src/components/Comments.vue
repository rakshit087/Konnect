<template>
  <transition name="modal-fade">
    <div
      class="fixed bottom-0 top-0 left-0 right-0 bg-blueBg flex justify-center items-center"
    >
      <div
        class="bg-offWhite flex flex-col w-1/2 h-auto z-1 shadow-xl"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
        :key="posted"
      >
        <header
          class="flex justify-between items-center bg-seaGreen py-3"
          id="modalTitle"
        >
          <h1 class="text-offWhite font-bold ml-4 text-xl">Comments</h1>
          <button
            type="button"
            class="text-2xl  font-bold h-10 w-10 text-offWhite hover:bg-brightRed mr-2 rounded-full"
            @click="close"
            aria-label="Close modal"
          >
            <i class="fas fa-times"></i>
          </button>
        </header>
        <section class="modal-body" id="modalDescription">
          <div class="h-64 w-full overflow-y-scroll">
            <div
              v-for="(commentdata, index) in allComments"
              :key="index"
              class="flex flex-col justify-center items-center mb-4"
            >
              <div
                class="w-11/12 h-16 flex items-center border-dashed border-2 border-seaGreen"
              >
                <div class="h-10 w-10 ml-4 mr-4"><ProfilePicture /></div>
                <p>{{ commentdata.comment }}</p>
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-footer">
          <div class="h-20 flex justify-center items-center">
            <div class="h-16 w-16 mr-4">
              <ProfilePicture />
            </div>
            <input
              maxlength="150"
              class="h-16 w-4/5 pl-8 bg-offWhite border-solid border-2 border-seaGreen"
              :placeholder="placeholder"
              v-model="comment"
            />
            <button
              class="h-16 w-12 bg-seaGreen text-offWhite rippleGreen"
              @click="postComment()"
            >
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
import ProfilePicture from "./ProfilePicture";
import ProfileServices from "@/services/ProfileServices";
import KrateServices from "@/services/KrateServices";
export default {
  name: "modal",
  components: {
    ProfilePicture
  },
  props: {
    krateId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      comment: "",
      placeholder: "Your Comment :)",
      allComments: [],
      posted: 0
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    postComment() {
      if (this.comment == "") {
        this.placeholder = "Please Enter a Comment";
      } else {
        KrateServices.postComment({
          userid: localStorage.getItem("userid"),
          krateid: this.krateId,
          comment: this.comment
        });
        this.comment = "";
        this.placeholder = "Your Comment :)";
        this.post = !this.post;
      }
    },
    async getName(sender) {
      const response = await ProfileServices.getProfile({ userid: sender });
      return response;
    }
  },
  async mounted() {
    const allComments = await KrateServices.getComments({
      krateid: this.krateId
    });
    console.log(this.krateId);
    this.allComments = allComments.data.comments;
  }
};
</script>
<style>
.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
