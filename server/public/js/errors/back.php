<script type="text/javascript">
	$(document).ready(function(){
	  jNotify(
		"<?php echo($SESSION['message']); unset($_SESSION['message']);?>",
		{
		  autoHide : true, // added in v2.0
		  clickOverlay : true, // added in v2.0
		  MinWidth : 250,
		  TimeShown : 3000,
		  ShowTimeEffect : 600,
		  HideTimeEffect : 200,
		  LongTrip :20,
		  HorizontalPosition : 'center',
		  VerticalPosition : 'top',
		  ShowOverlay : true,
		  ColorOverlay : '#000',
		  OpacityOverlay : 0.3,
		  onClosed : function(){ // added in v2.0

		  },
		  onCompleted : function(){ // added in v2.0

		  }
	  });
	});
</script>