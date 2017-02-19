import { Component, OnInit ,Input } from '@angular/core';
import {CommunityInfo} from '../../../model/community-info';


@Component({
  moduleId: module.id,
  selector: 'community-info-visit',
  templateUrl: 'community-info-visit.html'

})
export class CommunityInfoVisit implements OnInit 
{ 
  @Input()
  communityInfo: CommunityInfo;

  constructor(){ }

  ngOnInit(): void {}
}