<template>
    <div class="vue-map">
        <iframe
          :src="iframeSrc"
          allowfullscreen=""
          aria-hidden="false"
          loading="lazy"
          class="w-full h-360px"
        ></iframe>
    </div>
</template>

<script>

export default {
  name: 'VueMap',
  data: function () {
    return {
      iframeSrc: '',
      timeout: null,
      enderecoDestinoUsar: ''
    }
  },
  props: {
    /**
     * Endereço de destino que será usado no mapa, normalmente vem da empresa que exibe o mapa na página
     */
    enderecoDestino: {
      type: String,
      default: '',
    },
  },
  mounted: function () {
    this.setIframeSrc();
  },
  methods: {
    /**
     * Seta qual o src do iframe que tem que aparecer no Google Maps
     * @param timeTimeout
     */
    setIframeSrc ( timeTimeout ) {
        this.iframeSrc = 'https://maps.google.com/maps?f=q&source=s_q&geocode=&q=' + this.enderecoDestino + '&output=embed';
    },
  },
}
</script>

<style>
.vue-map .nav-item {
  font-size: 1.5rem;
}

.vue-map .nav-item:hover {
  border-color: #ccc #eee #fff !important;
  border-bottom: none;
}

.tab-rota {
  padding: 4px;
  font-weight: bold;
}
</style>
