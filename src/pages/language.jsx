
import React,{ useState } from 'react';

function Lan(props) {
    const[l,setL]=useState(1)
    const[cls,setCls]=useState(props.text)

return (
 <span className="lan">{lan(l,cls)}</span>
);
}
export function lan(a,b) {
  const lans=[{
    go_to_reg_page: 'रजिस्टर पेज पर जाएं',
   go_to_login_page: 'लॉगइन पेज पर जाएं',
   register_button: 'रजिस्टर',
   login_button: 'लॉग इन',
   welcome_mr: 'स्वागत है ',
   profile_label: 'प्रोफ़ाइल',
   view_records: 'रिकॉर्ड देखें',
   contact_admin: 'निर्माता से संपर्क करे',
   verify_user: 'नए उपयोगकर्ता की पहचान करें',
   help_label: 'मदद',
   logout_label: 'लॉग आउट',
   confirm_label: 'पुष्टि करें',
   first_name: 'प्रथम नाम',
   last_name: 'उपनाम',
   place_label: 'जगह',

   phone_number: 'मोबाइल',
   update_label: 'अपडेटं',
   work_date: 'काम की तारीख',
   date_label:'तारीख',
   attendance_label: 'उपस्थिति',
   names_label: 'नाम',
   work_details: 'कार्य विवरण',
   add_entry: 'रिकॉर्ड जोड़ें',
   search_specific_date: 'विशिष्ट तिथि खोजें',
   search_by_date_range: 'दिनांक सीमा द्वारा खोज',
   start_date: 'शुरुआत तिथि',
   end_date: 'समाप्ति तिथि',
   search_label: 'खोज',
   show_details: 'विस्तृतंं देखें',
   edit_details: 'सुधार कंरें',

   user_verification: 'नए उपयोगकर्ता की पहचान करें',
   pls_sbmt_fbdbk: 'कृपया अपनी प्रतिक्रिया यहाँ प्रस्तुत करें',
    send_to_admin: 'निर्माता को भेजें',
      mobile_number: 'मोबाइल नंबर',
     password_label: 'पासवर्ड',
     new_password: 'नया पासवर्ड',
     user_number: 'उपयोगकर्ता मोबाइल नंबर',
     user_name : 'उपयोगकर्ता नाम',
    search_by_keyword:'शब्द से खोजें ' ,
     hide_details:'जानकारी छिपाएँ',
     cancle_edit:'सुधार रद्द करें',
     field_not_empty:'खाली जगह न छोड़ें',
     number_length:'मोबाइल नंबर 10 अंकों का होना चाहिए',
     pass_length:'पासवर्ड कम से कम 4 अंकों का होना चाहिए',
     records_label:'रिकॉर्ड ',
     enter_record:'रिकॉर्ड दर्ज',
     about_label:'एप्लिकेशन के बारे में',

     creator_name_label:'निर्माता का नाम',
     creator_name_details:'Vikas Kumar',

     c_location_label:'स्थान',
     c_location_details:'Banglore',

     aim_of_app:'एप्लिकेशन का उद्देश्य',
     aim_of_app_details:'यह ऐप रेलवे कर्मचारियों के लिए उनकी बेहतरी और समय की बचत के लिए बनाया गया है',

     services_of_app:'सेवाऍ दी गयी',
     services_of_app_details:'एप्लिकेशन की मुख्य सेवाएं डेटा को स्टोर करना है। और उपयोगकर्ता रिकॉर्ड और खोज भी कर सकते हैं। चूंकि यह क्लाउड सेवाओं का उपयोग कर रहा है, इसलिए उपयोगकर्ता इसे दुनिया के किसी भी कोने से एक्सेस कर सकता है',

     thanks_label:'इस एप्लिकेशन का उपयोग करने के लिए धन्यवाद',

     how_to_enter_data:'रिकॉर्ड कैसे दर्ज करें',
     how_to_enter_data_details:'दैनिक रिकॉर्ड सहेजने के लिए, होम पेज या किसी भी पेज से ऐड एंट्री बटन पर क्लिक करें, वहां आप रिकॉर्ड डाल सकते हैं और नीचे दिए गए एंट्री बटन पर क्लिक करके इसे सहेज सकते हैं',

     how_to_view_data:'रिकॉर्ड कैसे देखें',
     how_to_view_data_details:'पिछले या आज के रिकॉर्ड को देखने के लिए, किसी भी पृष्ठ से व्यू रिकॉर्ड बटन पर क्लिक करें और आप पिछले 30 रिकॉर्ड देख सकते हैं, जिन्हें आपने सहेजा है, आप अपनी पसंद के अनुसार परिणामों के बीच खोज कर सकते हैं -> आप विशिष्ट दिन पर प्राप्त कर सकते हैं या आप खोज सकते हैं दो तिथियों के बीच या यहां तक ​​कि आप कुछ शब्दों द्वारा खोज सकते हैं',

    how_to_edit_data:'रिकॉर्ड में बदलाव कैसे करें ',
    how_to_edit_data_details:'रिकॉर्ड बदलने के लिए, "रिकॉर्ड" पृष्ठ पर जाएं और "विवरण देखें" बटन पर क्लिक करें, फिर नीचे विवरण विवरण बटन पर क्लिक करें फिर आप देखेंगे कि पृष्ठभूमि सफेद रंग में बदल गई है इसका मतलब है कि अब आप डेटा बदल सकते हैं और आगे या तो आप इसे सहेज सकते हैं अपडेट बटन पर क्लिक करके या रद्द करें संपादित बटन पर क्लिक करके इसे रद्द करें',

    send_data_on_whatsapp:'व्हाट्सएप पर कैसे भेजें',
    send_data_on_whatsapp_details:'आप अपने किसी भी रिकॉर्ड को व्हाट्सएप की अपनी संपर्क सूची में भेज सकते हैं, आप विवरण में रिकॉर्ड को देखते हुए इस बटन को नीचे पा सकते हैं',

     how_to_edit_personal_info:'नाम या पता कैसे बदलें',
     how_to_edit_personal_info_details:'व्यक्तिगत जानकारी बदलने के लिए, नाम पते की तरह, प्रोफ़ाइल पर क्लिक करें, फिर "जानकारी संपादित करें" पर क्लिक करें और आप अपने विवरणों को संपादित कर सकते हैं और इसे नीचे दिए गए बटन द्वारा सहेज सकते हैं ** नोट ** सुरक्षा कारणों से अभी आप मोबाइल नंबर बदलने में सक्षम नहीं होंगे धन्यवाद',

     what_is_contact_admin:'निर्माता से संपर्क क्या है',
     what_is_contact_admin_details:'यदि आप पाते हैं कि कुछ समस्या ठीक से काम नहीं कर रही है या आप किसी समस्या का सामना कर रहे हैं तो आप संपर्क निर्माता बटन पर क्लिक कर सकते हैं और निर्माता को संदेश भेज सकते हैं, ** नोट ** सुझाव के लिए भी आप निर्माता को संदेश भेज सकते हैं',

     what_is_verify_user:'सहकर्मी को भेजें क्या है?',
     what_is_verify_user_details:"आप इस वेब ऐप को अपने दोस्तों को भेज सकते हैं, यह सुरक्षित सेवा है, आपके दोस्तों में से जिनके साथ आपने इस वेब ऐप को साझा किया है, वे आपके व्यक्तिगत डेटा को नहीं देख पाएंगे और न ही आप उनके डेटा को देख पाएंगे",


     user_does_not_exist:'क्षमा करें, यह नंबर पंजीकृत नहीं है',

     sorry_incorrect_password:'पासवर्ड गलत है',
     register_successfull:'पंजीकृत, कृपया यहाँ लॉगिन करें',
     not_verified:'क्षमा करें किसी ने आपको सत्यापित नहीं किया',
     already_register:'आप पहले से ही पंजीकृत हैं कृपया यहाँ लॉगिन करें',
     share_friend:'सहकर्मी को भेजें',
     frind_number:"सहकर्मी का नंबर",
     frind_name:"सहकर्मी का नाम",
     send_invite:"भेजें",
     share_msg:"ऑनलाइन डेटा एंट्री सेवाओं का आनंद लेने के लिए कृपया नीचे दिए गए लिंक पर क्लिक करें। धन्यवाद",
     re_password:'पासवर्ड फिर से दर्ज करें',
     pass_missmatch:'पासवर्ड मैच नहीं कर रहा है',
     cancle_label:'कैंसिल',
     gender_label:'लिंग : ',
     male_label:'पुरुष',
     female_label:'महिला',
     use_as:'उपयोग करें :',
     work_record:'काम रिकॉर्ड के लिए',
     dairy_maintain:'डायरी',
     theme_label:'थीम',


     bgclr:'पृष्ठभूमि',

     navclr:'शीर्ष ',
     cardclr:'कार्ड ',
     labelclr:'लेबल ',
     popupclr:'पॉपअप ',
     btncnf:'पुष्टि बटन ',
     btnpro:'बटन प्रगति ',
     btnupd:'बटन अपडेट ',
     btnrej:'बटन रद्द ',
     ipclr:'इनपुट ',
     loginborder:'लॉगिन सीमा का रंग',
     regborder:'पंजीकरण सीमा का रंग',
     loginlabelclr:'लॉगिन लेबल का रंग',
     reglabelclr:'पंजीकरण लेबल रंग',

 },
 {
   go_to_reg_page: 'go to register page',
   go_to_login_page: 'go to login page',
   register_button: 'Register',
   login_button: 'Login',
   welcome_mr: 'welcome',
   profile_label: 'profile',
   view_records: 'view records',
   contact_admin: 'contact creator',
   verify_user: 'verify new user',
   help_label: 'help',
   logout_label: 'logout',
   confirm_label: 'confirm',
   first_name: 'first name',
   last_name: 'last name',
   place_label: 'place',

   phone_number: 'phone',
   update_label: 'Update',
   work_date: 'work date',
   attendance_label: 'attendance',
   names_label: 'names',
   work_details: 'work details',
   add_entry: 'Add Entry',
   search_specific_date: 'search specific date',
   search_by_date_range: 'search by date range',
   start_date: 'start date',
   end_date: 'end date',
   search_label: 'search',
   show_details: 'show details',
   edit_details: 'edit details',

   user_verification: 'User verification',
   pls_sbmt_fbdbk: 'please submit your feedback here',
    send_to_admin: 'send to creator',
    mobile_number: 'mobile number',
     password_label: 'password',
     new_password: 'new password',
     user_number: 'user number',
     user_name : 'user name',
     search_by_keyword:'search by keyword',
      hide_details:'hide details',
      cancle_edit:'cancle edit',
      date_label:'Date',
     field_not_empty:'fields can not be empty',
     number_length:'number should be 10 digit',
     pass_length:'password should atleast 4 digit',
     records_label:'records',
     enter_record:'enter record',

     about_label:'about app',

     creator_name_label:'creator name',
     creator_name_details:'Vikas Kumar',

     c_location_label:'location',
     c_location_details:'Banglore',

     aim_of_app:'aim of the application',
     aim_of_app_details:'this app is designed for the railways employees for their betterment and time saving',

     services_of_app:'services provided',
     services_of_app_details:'the main services of the application is to store user data and user can edit search records as per convinent. As it is using cloud services so user can access it from any corner of world',

     thanks_label:'thanks for using this app',

     how_to_enter_data:'how to enter records',
     how_to_enter_data_details:'for saving daily records, click on add entry button from home page or from any page, there you can enter records and save it by clicking add entry button ',

     how_to_view_data:'how to view records',
     how_to_view_data_details:'for viewing the past or todays record, click on view records button from any page and you can see last 30 records that you have saved, you can search your among results as per your fisibility --> you can get on specific day or in date range or even you can search by some words',

    how_to_edit_data:'how to edit records',
    how_to_edit_data_details:'for changing records data got to view records page and click on view more button then click on below edit details button then you will see the background has turned to white color means now you can change data and further either you can save that by clicking update button or cacle it by clicking cancle edit button',

    send_data_on_whatsapp:'how to send on whatsapp',
    send_data_on_whatsapp_details:'you can share your any records with any one who is in your contact list of whatsaap , you can find this button down while viewing the records in details ',

     how_to_edit_personal_info:'how to change name or address',
     how_to_edit_personal_info_details:'for changing personal info like name address click profile then edit info and you can edit your details and save it by below button **note** for security reason right now you wont be able tp change mobile number thanks',

     what_is_contact_admin:'what is contact creator',
     what_is_contact_admin_details:'In case you find some problem like missbehaving of application or breaking of function then you can clicl on contact creator button and send message to creator, **note** for suggestion also you can send message to creator',

     what_is_verify_user:'what is share with friends',
     what_is_verify_user_details:"You can share this web app to your friends, thsi is secure service, non of your friends with whom you shared this web app will be able to see yoyr personal data neither you of their's data",

     user_does_not_exist:'Sorry this number is not registered',

     sorry_incorrect_password:'password is incorrect',
     register_successfull:'register successfull please login here',
     not_verified:'sorry you are not verified user please get verified',
     already_register:'you are already register please login here',
     share_friend:'share with friend',
     frind_number:"friend's number",
     frind_name:"friend's name",
     send_invite:"send invite to friend",
     share_msg:"please click on the below link to enjoy the online data entry services. thank you ",
     re_password:'re enter password',
     pass_missmatch:'passwords does not matches',
     cancle_label:'cancel',
     gender_label:'Gender : ',
     male_label:'Male',
     female_label:'Female',
     use_as:'use as : ',
     work_record:'Work records',
     dairy_maintain:'Diary',
     theme_label:'Theme',


     bgclr:'background',

     navclr:'head',
     cardclr:'Card ',
     labelclr:'label ',
     popupclr:'popup ',
     btncnf:'Button confirm',
     btnpro:'Button Progress',
     btnupd:'Button Update',
     btnrej:'Button cancle',
     ipclr:'Input',
     loginborder:'Login border color',
     regborder:'Registration border color',
     loginlabelclr:'Login label color',
     reglabelclr:'Registration label color',
}];

  return(lans[a][b]);
}
export default Lan;