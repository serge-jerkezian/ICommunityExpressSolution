import { Component, OnInit ,Input } from '@angular/core';
import {CommunityInfo} from '../../../model/community-info';


@Component({
  moduleId: module.id,
  selector: 'community-contact',
  templateUrl: 'community-contact.html'

})
export class CommunityContact implements OnInit 
{ 
  @Input()
  communityContact: CommunityContact[];

  constructor(){ }

  ngOnInit(): void {}
}