import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  simpleAlert(){
    Swal.fire({
      title : 'Are you want to remove ?',
      text : 'You will not able to recover this file !',
      icon : 'warning',
      showCancelButton : true,
      confirmButtonText:'Yes delete it',
      cancelButtonText : 'No keep it',
      confirmButtonColor: "#0dcaf0",
      cancelButtonColor: "#adb5bd"

    }).then((result) => {
      if (result.value){
        // Swal.fire("Thank you ..",'You submitted successfully','success');
        Swal.fire({
          title : 'Thank you ..',
          text : 'You submitted successfully',
          icon : 'success',
          confirmButtonColor: "#0dcaf0",
          confirmButtonText:'Metfehmin'
        })
      }else if (result.dismiss === Swal.DismissReason.cancel) {
          // Swal.fire('Cancelled','Your imaginary file is safe','error');
          Swal.fire({
            title : 'Cancelled',
            text : 'Your imaginary file is safe',
            icon : 'info',
            confirmButtonColor: "#adb5bd",
            confirmButtonText:'Metfehmin'
          })
      }
    })
  }
  simpleWithSuccess(){
    // Swal.fire("Thank you ..",'You submitted successfully','success');
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
















