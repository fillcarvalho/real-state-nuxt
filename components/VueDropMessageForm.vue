<template>
  <!-- Drop Messege For Book -->
  <div
    class="px-5 pt-35px pb-10 xl:pl-35px xl:pr-30px mb-10 border-2 border-border-color-11"
  >
    <h4 class="text-lg font-semibold text-heading-color mb-25px">
                  <span
                    class="leading-1.3 pl-10px border-l-2 border-secondary-color"
                  >Tem interesse?</span
                  >
    </h4>
<!--    <div v-if="this.hasError" class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">-->
<!--      <span class="font-medium">Preencha o formulário corretamente!</span>-->
<!--    </div>-->
    <form @submit.prevent="onSubmit">
      <div class="grid gap-30px mb-10">
        <!-- name -->
        <div class="relative">
          <input
            v-model="name"
            type="text"
            placeholder="Nome*"
            class="text-paragraph-color px-5 py-15px outline-none border-2 border-border-color-9 focus:border focus:border-secondary-color h-65px block w-full rounded-none placeholder:text-sm placeholder:text-paragraph-color"
            v-bind:class="{'border': !isNameValid, 'border-secondary-color': !isNameValid}"
            @blur.prevent="handleBlurName"
          >
        </div>
        <!-- message -->
        <div class="relative">
                      <textarea
                        v-model="message"
                        placeholder="Mensagem..."
                        class="min-h-[150px] text-paragraph-color px-5 py-15px outline-none border-2 border-border-color-9 focus:border focus:border-secondary-color h-65px block w-full rounded-none placeholder:text-sm placeholder:text-paragraph-color"
                      ></textarea>
        </div>
      </div>

      <!-- submit button -->

      <div>
        <h5
          class="uppercase text-sm md:text-base text-white bg-green-700 hover:bg-green-500 relative group whitespace-nowrap font-normal mb-0 transition-all duration-300 border border-green-900 hover:border-heading-color inline-block z-0"
        >
          <button
            type="submit"
            class="relative z-1 px-5 md:px-25px lg:px-10 py-10px md:py-15px lg:py-17px group-hover:text-white leading-23px uppercase"
          >
            <font-awesome-icon icon="fa-brands fa-whatsapp" /> Entrar em contato
          </button>
        </h5>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'vue-drop-message-form',
  data () {
    return {
      name: '',
      isNameValid: true,
      message: 'Olá, tenho interesse em saber mais sobre este apartamento.',
      hasError: false,
      whatsAppPhoneNumber: 5516994273155
    }
  },
  methods: {
    handleBlurName() {
      // Cleaning error messages
      this.hasError = false;
      this.isNameValid = true;
    },
    onSubmit() {
      if ( this.validate() ) {
        window.open(this.getFinalUrl);
        this.name = '';
        this.message = '';
      }
    },
    validate() {
      // Validating name
      this.isNameValid = this.name !== '';

      this.hasError = !this.isNameValid;

      return !this.hasError;
    }
  },
  computed: {
    getFinalUrl() {
      return 'https://api.whatsapp.com/send?phone=' + this.whatsAppPhoneNumber + '&text=Nome: ' + encodeURIComponent(this.name) + '. Mensagem: ' + encodeURIComponent(this.message) + ' Página:' + encodeURIComponent(window.location.href);
    }
  }
}
</script>
