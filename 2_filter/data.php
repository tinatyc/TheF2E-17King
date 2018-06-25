<?php
$_PostStr = $_POST['QAQ'];
// echo $_PostStr;
$_dataurl = 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&q={"Zone":"旗津區"}';
// $_dataurl = "http://data.coa.gov.tw/Service/OpenData/DataFileService.aspx?UnitId=078";
$_praseurl = file_get_contents($_dataurl);
echo $_dataurl;
// $_json = json_decode($_praseurl);
// echo $_praseurl;

// echo $_json;
// echo "<pre>";
// var_dump($_json);
// echo "</pre>";
// $_json = json_decode($_json->city);
// $local_city = $_POST['local_city'];
// $local_area = $_POST['local_area'];

// echo "<pre>";
// echo $local_city;
// echo $local_area;
// $_json = $_json[5][縣市];
// echo $_json;
// print_r($_json);
// var_dump($_json);
// echo "</pre>";
// $hop_arr = array();
// echo "<br/>";
// echo "$_json";
/*
foreach ($_json as $value) {
	// echo "<pre>";
	// var_dump($value);
	$_city = $value->縣市;
	$_hnum= $value->字號;
	$_class= $value->執照類別;
	$_stu= $value->狀態;
	$_hname= $value->機構名稱;
	$_hdoc= $value->負責獸醫;
	$_hphone= $value->機構電話;
	$_hdate= $value->發照日期;
	$_hattr= $value->機構地址;
	// echo strcasecmp($_city,$local_city);
	if($local_city == $_city ){
			// echo "yes";
			// echo $_city;
		array_push($hop_arr, $_hattr);
			// echo $_hattr;     
			print_r($hop_arr);
	// echo "<script>";
 //    echo "console.log('$_hattr')";
 //    echo "</script>";
	}else {
		// echo "fuck";
	}
	  // var_dump($value->縣市);
	  // var_dump($value->字號);
	  // var_dump($value->執照類別);
	  // var_dump($value->狀態);
	  // var_dump($value->機構名稱);
	  // var_dump($value->負責獸醫);
	  // var_dump($value->機構電話);
	  // var_dump($value->發照日期);
	  // var_dump($value->機構地址);
	// echo $_city;
	// echo $_hnum;
	// echo $_class;
	// echo $_stu;
	// echo $_hname;
	// echo $_hdoc;
	// echo $_hphone;
	// echo $_hdate;
	// echo $_hattr;
	
	// echo "</pre>";
	// foreach ($value as $value) {
	// 	echo $value;
	// }
}
*/
?>
