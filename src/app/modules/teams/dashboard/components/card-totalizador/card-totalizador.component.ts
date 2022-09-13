import {Component, OnInit} from '@angular/core';
import { faUserTie, faPhone, faUserFriends, faUsers, faMicrophone, faVideo, faDesktop, faBorderAll} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-totalizador',
  templateUrl: './card-totalizador.component.html',
  styleUrls: ['./card-totalizador.component.scss']
})
export class CardTotalizadorComponent implements OnInit {

  faUserTie = faUserTie;
  faPhone = faPhone;
  faUserFriends = faUserFriends;
  faUsers = faUsers;
  faMicrophone = faMicrophone;
  faVideo = faVideo;
  faDesktop = faDesktop;
  faBorderAll = faBorderAll;

  totalizadoresColaboradores?: number = 0;
  totalizadoresCalls?: number = 0;
  totalizadoresPeerToPeer?: number = 0;
  totalizadoresGroup?: number = 0;
  totalizadoresAudio?: number = 0;
  totalizadoresAudioVideo?: number = 0;
  totalizadoresAudioTela?: number = 0;
  totalizadoresAudioVideoTela?: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
