var app = new Vue({
  el: '#app',

  data() {
    return {
      picked: 'rainbow',
      downloadButtonState: 0
    }
  },

  components: {
    'picture-input': PictureInput
  },

  methods: {
    printPng: function() {
      var node = document.getElementById('pride-avatar');
      domtoimage.toPng(node)
        .then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = 'pride-halo.png';
          link.href = dataUrl;
          link.click();
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
    },
    onChange (image) {
      console.log('New picture selected!')
      if (image) {
        console.log('Picture loaded.')
        this.image = image
        this.downloadButtonState = 'enabled'
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    }
  }
})
