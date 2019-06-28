import 'bootstrap/dist/css/bootstrap.css'
import data from './data'

// console.log(data)
const dataNum = data.length;
const dataKeyNum = Object.keys(data[0]).length;
const thead = document.querySelector(".table thead");
const tbody = document.querySelector(".table tbody");
const theadAddTr = document.createElement("tr");

thead.appendChild(theadAddTr);
console.log(dataKeyNum);
for(let i = 0; i < dataKeyNum; i++){
  const theadtr = document.querySelector(".table thead tr");
  const theadAddTd = document.createElement("td");
  theadtr.appendChild(theadAddTd);
  document.querySelectorAll(".table thead tr td")[i].append(Object.keys(data[0])[i])
}
for(let k = 0; k < dataNum; k++){
  const tbodyAddTr = document.createElement("tr");
  tbody.appendChild(tbodyAddTr);
  for(let j in data[k]){
    const tbodyAddTd = document.createElement("td");
    let val;
  
    // 1번째 : 삼항연산자 ( 예외처리가 1개일 때만 사용가능, 즉 현재는 사용 불가 )
    // j == 'address' ? 
    // tbodyAddTd.append(data[k][j].street + data[k][j].suite + data[k][j].city + data[k][j].zipcode) : tbodyAddTd.append(data[k][j])

    // 2번째 : switch 1
    // switch(j)
    // {
    //   case 'id' :
    //   tbodyAddTd.append(data[k].id)
    //   break;
    //   case 'name' :
    //   tbodyAddTd.append(data[k].name)
    //   break;
    //   case 'username' :
    //   tbodyAddTd.append(data[k].username)
    //   break;
    //   case 'email' :
    //   tbodyAddTd.append(data[k].email)
    //   break;
    //   case 'address' :
    //   val = data[k].address.street + data[k].address.suite + data[k].address.zipcode
    //   tbodyAddTd.append(val)
    //   break;
    //   case 'phone' :
    //   tbodyAddTd.append(data[k].phone)
    //   break;
    //   case 'website' :
    //   tbodyAddTd.append(data[k].website)
    //   break;
    //   case 'company' :
    //   val = data[k].company.name + data[k].company.catchPhrase + data[k].company.bs
    //   tbodyAddTd.append(val)
    //   break;
    // } 

    // 3번째 : switch 2
    // switch(j)
    // {
    //   case 'address' :
    //     val = data[k].address.street + data[k].address.suite + data[k].address.zipcode
    //     tbodyAddTd.append(val)
    //   break;
    //   case 'company' :
    //     val = data[k].company.name + data[k].company.catchPhrase + data[k].company.bs
    //     tbodyAddTd.append(val)
    //   break;
    //   default :
    //     val = j;
    //     tbodyAddTd.append(data[k][j])
    //   break;
    // }

    // 4번째 : if문
    if(j == 'address'){
      tbodyAddTd.append(data[k][j].street + data[k][j].suite + data[k][j].city + data[k][j].zipcode)
    }else if(j == 'company'){
      tbodyAddTd.append(data[k][j].name + data[k][j].catchPhrase + data[k][j].bs)
    }else{
      tbodyAddTd.append(data[k][j])
    }

    tbodyAddTr.appendChild(tbodyAddTd);
  }
}

// if문
// 장점: 점프 테이블을 만드는 오버헤드가 없다.
// 단점: if 혹은 else if를 만날 때마다 조건을 만족하는지 안하는지를 확인하기 위한 인스트럭션이 계속해서 필요됨.
// 즉, 따져야 할 조건의 수가 적을 경우 if-else를 쓰는 것이 유리함.

// switch문
// 장점: switch문 시작시에 입력받은 값을 확인하는 인스트럭션만 필요. 조건을 확인하는 인스트럭션이 필요 없음.
// 단점: 점프 테이블을 만드는 오버헤드가 있음.
// 즉, 따져야 할 조건의 수가 많아져도 인스트럭션이 추가로 요구되는 것이 아니기 때문에,
// 따져야 할 조건이 많은 경우 switch문을 쓰는 것이 유리합니다.