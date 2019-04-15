// JavaScript Document for function check validate
// function WriteFile(class_input_text) {
// 	// var fso = new ActiveXObject("Scripting.FileSystemObject");
// 	// var fh = fso.CreateTextFile("E:\\data.txt", true);

//     var fh = fopen("E:\\FPT_Univerity\\PRO201\\FinalProject\\data.txt", 3); // mở file để ghi

//     if (fh != -1) // mở file thành công
//     {
//         var textToWrite = document.getElementsByClassName('class_input_text').value;
//         for (var i = 0; i < textToWrite.length; i++) {
//             fwrite(fh, str); // ghi chuỗi vào file
//         }
//         fclose(fh); // đóng file
//     }

// }
// var fso = new ActiveXObject("Scripting.FileSystemObject");

// var fh = fso.CreateTextFile("c:\\Test.txt", true);

function checkoutSubmit() {
	var name = document.getElementById('input-name');
	var phone = document.getElementById('input-phone');
	var add = document.getElementById('input-add');
	var mail = document.getElementById('input-mail');
	if (name.value == "") {
		alert("Vui lòng điền đầy đủ họ tên!");
		name.focus();
		return false;
	} else if (mail.value == "") {
		alert("Vui lòng điền tên email!");
		mail.focus();
		return false;
	} else if (phone.value == "" || phone.value.match("^[0-9]{10,11}$") == null) {
		alert("Số điện thoại không hợp lệ. Vui lòng nhập lại.");
		phone.focus();
		return false;
	} else if (add.value == "") {
		alert("Vui lòng điền đầy đủ địa chỉ!");
		add.focus();
		return false;
	}
	// WriteFile('inputTextToSave');
	alert("Cảm ơn bạn đã đặt hàng cho chúng tôi. Đơn hàng của bạn đang được xử lí");
	window.localStorage.clear();
	window.open("finish.html", "_self");
	return true;
}

// function delayer() {
// 	window.location = "index.html";
// }
