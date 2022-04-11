import { Component, OnInit, NgZone } from '@angular/core';
import { TransactionService } from '../shared/transaction.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.page.html',
  styleUrls: ['./add-transaction.page.scss'],
})

export class AddTransactionPage implements OnInit {

  songForm: FormGroup;
  
  constructor(
    private transactionAPI: TransactionService,
    private router: Router,
    public fb: FormBuilder,
    private zone: NgZone
  ) {
    this.songForm = this.fb.group({
      amount: [''],
      type: [''],
      description: [''],
      balance: null
    })
    
  }

  ngOnInit() { }

  onFormSubmit() {
    if (!this.songForm.valid) {
      return false;
    } else {
      
      this.transactionAPI.getLastTransaction().subscribe((res: any) => {
        console.log("test",res.balance);
        let balance;
        if(this.songForm.value.type == "Credit"){
          balance = res.balance + this.songForm.value.amount;
        }else{
          balance = res.balance - this.songForm.value.amount;
        }
        this.saveData(balance)
      })

      
      
    }
  }

  saveData(balance) {
    console.log("balance",balance);
      this.songForm.patchValue({balance: balance});
      console.log(this.songForm);
      this.transactionAPI.addTransaction(this.songForm.value)
        .subscribe((res) => {
          this.zone.run(() => {
            console.log(res)
            this.songForm.reset();
            this.router.navigate(['/home']);
          })
        });
  }

}
