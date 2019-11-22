import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../model/Profile';

@Injectable()
export class MyInterceptorService implements HttpInterceptor {

  constructor() {

    const profile = {
      prefLines: [],
      username: ''
    };

    localStorage.setItem('profile', JSON.stringify(profile));
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if ((req.url.includes('go/user/new/') && (req.method === 'POST'))
          || (req.url.includes('go/login') && (req.method === 'POST'))
          || (req.url.includes('go/profile/get') && (req.method === 'GET'))
          || (req.url.includes('go/logout') && (req.method === 'GET'))) {

      return new Observable(observer => {

        observer.next(new HttpResponse<Profile>(
        {
          body:
          {
            prefLines: [],
            username: 'somebody'
          },
          status: 200
        }));

        observer.complete();
      });

    } else if (req.url.includes('go/profile/lines/new/') && (req.method === 'PUT')) {

      const profile = JSON.parse(localStorage.getItem('profile'));

      profile.prefLines.push(req.url.split('go/profile/lines/new/')[1]);

      localStorage.setItem('profile', JSON.stringify(profile));

      return new Observable(observer => {

        observer.next(new HttpResponse<Profile>(
        {
          body:
          {
            prefLines: profile.prefLines,
            username: 'somebody'
          },
          status: 200
        }));

        observer.complete();
      });

    } else if (req.url.includes('go/profile/lines/del/') && (req.method === 'PUT')) {

      const profile = JSON.parse(localStorage.getItem('profile'));
      const line = req.url.split('go/profile/lines/del/')[1];
      let i = 0;

      // delete the item;
      do {

        if (profile.prefLines[i] === line) {
          profile.prefLines.splice(i, 1);
        }

        i++;
      } while (i < profile.prefLines.length);

      localStorage.setItem('profile', JSON.stringify(profile));

      return new Observable(observer => {

        observer.next(new HttpResponse<Profile>(
        {
          body:
          {
            prefLines: profile.prefLines,
            username: 'somebody'
          },
          status: 200
        }));

        observer.complete();
      });
    } else if (req.url.includes('dataset=lignes-de-bus-du-reseau-star&rows=200') && (req.method === 'GET')) {

      const obj = {
        nhits: 164,
        parameters: {
          dataset: ['lignes-de-bus-du-reseau-star'],
          timezone: 'UTC',
          rows: 200,
          format: 'json'
        },
        records: [
          {
            datasetid: 'lignes-de-bus-du-reseau-star',
            recordid: '6d7936b0d5f7124cfd8e704d0afcfb1e5de21daa',
            fields: {
              couleurligne: '#95c11e',
              couleurtexteligne: '#1a171b',
              nomfamillecommerciale: 'CHRONOSTAR',
              nomlong: 'Cesson-Sévigné (Champs Blancs) <> Rennes  <> Chantepie (Rosa Parks)',
              nomcourt: 'C1',
              id: '0001'
            }
          },
          {
              datasetid: 'lignes-de-bus-du-reseau-star',
              recordid: '1223c1f42b50834eb156a64fce806939cfeb9555',
              fields: {
                couleurligne: '#6f2282',
                couleurtexteligne: '#ffffff',
                nomfamillecommerciale: 'CHRONOSTAR',
                nomlong: 'Rennes (ZA Saint-Sulpice) <> Saint-Grégoire (Grand Quartier)',
                nomcourt: 'C4',
                id: '0004'
              }
            }
        ]
      };

      return new Observable(observer => {

        observer.next(new HttpResponse<any>(
        {
          body: obj,
          status: 200
        }));

        observer.complete();
      });
    }

    // pass through other requests.
    return next.handle(req);
  }

}
