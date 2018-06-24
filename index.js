var app = new Vue({
  el: '#app',

  data() {
    return {
      gradient: 'bg-bi',
      url: 'https://i.imgur.com/Z1LPMoZ.png',
      picked: 'rainbow'
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
          link.download = 'my-node.png';
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
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    }
  }
})
