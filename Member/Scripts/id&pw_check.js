
//아이디 유효성 체크 함수

function lCheck(){
    const re = /[a-zA-z]{6}/;
    const check = document.getElementById( 'id' ).value;
    const re2 = /\w{6}/;
    const check2 = document.getElementById( 'pw' ).value;

    if( re.test( check )){
        document.getElementById( 'pw' ).focus;
        if ( re2.test( check2 )){
        checkCustomerInfo();
        };
    } else {
        alert( "ID 혹은 PW가 잘못 입력됐습니다.")
    };
};

//--------------------------------------------------------------------

// 유효성 체크 후 저장된 유저의 데이터를 체크하고 로그인하는 함수

function checkCustomerInfo(){
    let pw = document.getElementById( 'pw' ).value;
    let id = document.getElementById( 'id' ).value;

    let name = '고객님';
    let pass = false;
    alert( "고객 정보 확인 중 !!" );

    const customerInfo =
    [[ 'asdasd', 'a1234q', '일지매'],
    [ 'qweqwe', 'b1234q', '이지매'],
    [ 'zxczxc', 'c1234q', '삼지매']];

    for( let i = 0; i < customerInfo.length; i++ ){
        if (( id == customerInfo[ i ][ 0 ]) && ( pw == customerInfo[ i ][ 1 ])){
            pass = true;
            name = customerInfo[ i ][ 2 ];
            break;
        }
    }


    if( pass == false ){
        alert( '아이디 또는 패스워드가 맞지 않습니다' );
        window.open( "login.html" );
    } else {
        alert( name + "님 반갑습니다 !!")
        sessionStorage.setItem( "id", id );
        sessionStorage.setItem( "pw", pw );
        sessionStorage.setItem( "name", name );

        window.open( "loginSuccess.html" );
    }
}



//--------------------------------------------------------------------

//비밀번호 변경 함수들

function curPW(){
    let password = document.getElementById( 'password' ).value;
    let sessionpw = sessionStorage.getItem( 'pw' );

    if( password === sessionpw ){
        alert( "해당 고객 - " + "'" + sessionStorage.getItem( 'name' )+ "'" + "님");
        document.getElementById( 'cngpw1' ).focus()
    } else {
        alert( "비밀번호가 잘못 입력되었습니다." );
        document.getElementById( 'password' ).focus()
    }
}

function nextInput(){
    const re = /\w{6}/;
    const check1 = document.getElementById( 'cngpw1' ).value;
    let sessionid = sessionStorage.getItem( 'id' );
    let sessionpw = sessionStorage.getItem( 'pw' );
    
    if ( !re.test( check1 )){
        alert( "알파벳 혹은 숫자로 6자리 이상 입력해주세요.");
        document.getElementById( 'cngpw1' ).focus()
}   else if( check1 == sessionpw ){ 
    alert( "기존 비밀번호와 다른 비밀번호를 사용해주세요." );
    document.getElementById( 'cngpw1' ).focus();
}   else if( check1 == sessionid ){ 
    alert( "아이디와 다른 비밀번호를 사용해주세요." );
    document.getElementById( 'cngpw1' ).focus();
}else{
    document.getElementById( 'cngpw2' ).focus()
}
};


function changePW(){
    const re = /\w{6}/;
    const check1 = document.getElementById( 'cngpw1' ).value;
    const check2 = document.getElementById( 'cngpw2' ).value;
    let sessionid = sessionStorage.getItem( 'id' );
    let sessionpw = sessionStorage.getItem( 'pw' );
    let setting = false;
    let customerInfo;

    if ( !re.test( check2 )){
        alert( "알파벳 혹은 숫자로 6자리 이상 입력해주세요.");
        document.getElementById( 'cngpw2' ).focus();
    } else if( check1 !== check2 ) {
        alert( "*비밀번호가 서로 다릅니다." );
        document.getElementById( 'cngpw2' ).focus();
    } else if( check2 == sessionpw ){ 
        alert( "기존 비밀번호와 다른 비밀번호를 사용해주세요." );
        document.getElementById( 'cngpw2' ).focus();
    } else if( check2 == sessionid ){ 
        alert( "아이디와 비밀번호가 같습니다." );
        document.getElementById( 'cngpw1' ).focus();
    } else {
        customerInfo = [ sessionStorage.getItem( "id" ),
                            sessionStorage.getItem( "pw" ),
                            sessionStorage.getItem( "name" ) ];

        setting = true;
    };

    
    if( setting ){
        
        alert( "비밀번호가 변경되었습니다." );
        sessionStorage.setItem('pw', check2 );
        window.open( "file:///C:/Users/user/Desktop/HTML_NEW/Exec/Member/loginSuccess.html" );
    };
};

// function pNumChange(){
//     const re1 = prompt( "등록할 전화번호를 형식에 맞게 입력해주세요", "EX) 000-000-0000" )
//     const re2 = /^\d{3}-\d{3,4}-\d{4}$/;

//     if( !re2.test( re1 )){
//         alert( "형식을 다시 확인해주세요" );
//     } else {
//         sessionStorage.setItem( 'number', re1 );
//         document.getElementById( 'successLabel' ).innerHTML( "전화번호: " + sessionStorage.getItem( 'number' ) );
//     };
// }