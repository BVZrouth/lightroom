/*DROPZONE JS START*/
$(document).ready(function(){
  var previewNode = document.querySelector("#zdrop-template");
previewNode.id = "";
var previewTemplate = previewNode.parentNode.innerHTML;
previewNode.parentNode.removeChild(previewNode);
  
  var zdrop = new Dropzone("#zdrop", {
        url: '/Home/UploadFile',
	  init: function() {
      this.on("maxfilesexceeded", function(file) {
            this.removeAllFiles();
            this.addFile(file);
      });
},   
        maxFilesize:20,
	    maxFiles: 1,
        previewTemplate: previewTemplate,
        autoQueue: false,
        previewsContainer: "#previews",
        clickable: "#zdrop, #upload"
});
  
  zdrop.on("totaluploadprogress", function (progress) {
    var progr = document.querySelector(".progress .determinate");
    if (progr === undefined || progr === null)
        return;
 
    progr.style.width = progress + "%";
});
 
zdrop.on('dragenter', function () {
    // $('#zdrop').css({ background: '#41ab6b', color: '#fff' });
    $('#zdrop').addClass('green lighten-1 white-text');
});
 
zdrop.on('dragleave', function () {
    // $('#zdrop').css({ background: '#fff', color: '#000' });
    $('#zdrop').addClass('white black-text').removeClass('green lighten-1 white-text');
});
 
zdrop.on('drop', function () {
    //  $('#zdrop').css({ background: '#fff', color: '#333' });
    $('#zdrop').addClass('white black-text').removeClass('green lighten-1 white-text');
});
	
$('#previews').hide();
/*
if ($("#mainApp").find('img').length)
{
	$('#target').hide();
	$('#submit').hide();
	$('#delete').hide();
	$('#upload').show();
	$('#dropZoneContainer').show();
}
else
{
	$('#target').show();
	$('#submit').show();
	$('#delete').show();
	$('#upload').hide();
	$('#dropZoneContainer').hide();
	var dkrm = new Darkroom('#target', {
	// Size options
	minWidth: 100,
	minHeight: 100,
	maxWidth: 600,
	maxHeight: 500,
	ratio: 4/3,
	backgroundColor: '#000',
	// Plugins options
	plugins: {
		//save: false,
		crop: {
			quickCropKey: 67, //key "c"
		}
	},
	// Post initialize script
	initialize: function() {
	//		var cropPlugin = this.plugins['crop'];
			// cropPlugin.selectZone(170, 25, 300, 300);
	//		cropPlugin.requireFocus();
		}
	}); //Darkroom Variable END
}*/
});
/*DROPZONE JS END*/

/*REACT JS START*/
/*'use strict';
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageUpload = function (_React$Component) {
  _inherits(ImageUpload, _React$Component);

  function ImageUpload(props) {
    _classCallCheck(this, ImageUpload);

    var _this = _possibleConstructorReturn(this, (ImageUpload.__proto__ || Object.getPrototypeOf(ImageUpload)).call(this, props));

    _this.state = { file: '', imagePreviewUrl: '' };
    return _this;
  }

  _createClass(ImageUpload, [{
    key: '_handleSubmit',
    value: function _handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      console.log('handle uploading-', this.state.file);
    }
  }, {
    key: '_handleImageChange',
    value: function _handleImageChange(e) {
      var _this2 = this;

      e.preventDefault();

      var reader = new FileReader();
      var file = e.target.files[0];

      reader.onloadend = function () {
        _this2.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      };

      reader.readAsDataURL(file);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var imagePreviewUrl = this.state.imagePreviewUrl;

      var $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = React.createElement('img', { src: imagePreviewUrl });
      }

      return React.createElement(
        'div',
        { className: 'previewComponent', id: 'asdf' },
        React.createElement(
          'form',
          { onSubmit: function onSubmit(e) {
              return _this3._handleSubmit(e);
            } },
          React.createElement('input', { className: 'fileInput', type: 'file', onChange: function onChange(e) {
              return _this3._handleImageChange(e);
            } }),
          React.createElement(
            'button',
            { className: 'fa fa-check btn waves-effect waves-light start', type: 'submit', onClick: function onClick(e) {
                return _this3._handleSubmit(e);
              } },
            ''
          )
        ),
        React.createElement(
          'div',
          { className: 'imgPreview' },
          $imagePreview
        )
      );
    }
  }]);

  return ImageUpload;
}(React.Component);

React.render(React.createElement(ImageUpload, null), document.getElementById("mainApp"));*/
/*REACT JS END*/

