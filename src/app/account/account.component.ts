import { Component, EventEmitter, Input, } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;
 
  constructor(private loggingService: LoggingService,
              private accountsService : AccountsService) {

                this.accountsService.statusUptaded.subscribe(
                  (status:string)=>alert('New Status: '+status)
                );

               }
  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id,status);
    // this.loggingService.logStatusChange(status);
    this.accountsService.statusUptaded.emit(status);
    // console.log('A server status changed, new status: ' + status);
  }
}
