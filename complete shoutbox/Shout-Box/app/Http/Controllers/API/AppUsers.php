<?php
namespace App\Http\Controllers\API;
use Illuminate\Http\Request; 
use App\Http\Controllers\Controller; 
use App\User; 
use Illuminate\Support\Facades\Auth; 
use Validator;
use Illuminate\Support\Facades\DB;

class AppUsers extends Controller 
{
public $successStatus = 200;
// /** 
//      * login api 
//      * 
//      * @return \Illuminate\Http\Response 
//      */ 
//     public function login(Request $request){ 
       
//         $validator = Validator::make($request->all(), [
//             'email' => 'required|email|unique:users', 
//             'password' => 'required', 
//         ]);

//         if ($validator->fails()) { 
//             return response()->json(['error'=>$validator->errors()], 401);            
//         }

//         elseif(Auth::attempt(['email' => $request['email'], 'password' => $request['password']])){ 
//             $user = Auth::user(); 
//             // $success['token'] =  $user->createToken('MyApp')-> accessToken; 
//             //return response()->json(['success' => $success], $this-> successStatus); 
//             return response()->json($this-> successStatus);
//         } 
//         else{ 
//             return response()->json(['error'=>'Unauthorised'], 401); 
//         } 
//     }
// /** 
//      * Register api 
//      * 
//      * @return \Illuminate\Http\Response 
//      */ 
//     public function register(Request $request) 
//     { 
//         $validator = Validator::make($request->all(), [ 
//             'firstname' => 'required',
//             'lastname' => 'required',
//             'dob' => 'required',
//             'gender' => 'required',
//             'contact_no' => 'required',
//             'email' => 'required|email|unique:users', 
//             'city' => 'required',
//             'country' => 'required',
//             'state' => 'required',
//             'password' => 'required|min:8', 
//             'confirm_password' => 'required|same:password', 
//         ]);
//         if ($validator->fails()) { 
//             return response()->json(['error'=>$validator->errors()], 401);            
//         }
        
//         $request_input = $request->all(); 
//         $request_input['password'] = bcrypt($request_input['password']);
//         $new_input = array(
//             'registration_status'=>'pending',
//             'user_type'=>'customer');
//         $final_input=array_merge($request_input, $new_input);
//         $user = User::create($final_input); 
//         // $success['token'] =  $user->createToken('MyApp')-> accessToken; 
//         $success['name'] =  $user->firstname;
//         $success['message'] = "Request Sent";
//         return response()->json(['success'=>$success], $this-> successStatus); 
//     }
// /** 
//      * details api 
//      * 
//      * @return \Illuminate\Http\Response 
//      */ 
//     public function details() 
//     { 
//         $user = Auth::user(); 
//         return response()->json(['success' => $user], $this-> successStatus); 
//     } 
 
    public function searchUsers(Request $request){
        $intReqId = (int)$request['id'];
        
$users =DB::select("SELECT u.id,u.profile_image, u.firstname, u.lastname, f.id, f.user_id, f.friend_id, f.friendship_status 
        FROM users u LEFT JOIN friends_list f ON f.user_id = u.id AND f.friend_id = ".$intReqId."
        WHERE u.id != ".$intReqId." AND u.user_type = 'customer' AND u.firstname ='".$request['name']."'");
    $success['message'] = "Search is done";
    return response()->json(['success'=>$success,'users'=>$users], 200);

    }

}