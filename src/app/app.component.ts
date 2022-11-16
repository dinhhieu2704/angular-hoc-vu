import { Component, VERSION } from '@angular/core';
import { allData } from './all-data';
import { k61 } from './k61';
import { k61_62 } from './k61-62';
import { k62 } from './k62';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor() {
    const vk61 = k61;
    const vk62 = k62;
    const vk61_62 = k61_62;

    const a = vk61_62.filter(x => vk61.some(z => z.MaSinhVien == x.MaSinhVien && z.IdNganh == x.IdNganh));
    const b = vk61_62.filter(x => vk62.some(z => z.MaSinhVien == x.MaSinhVien && z.IdNganh == x.IdNganh));

    console.log(a.length);
    console.log(b.length);

    console.log(vk62.length)

    const c = b.filter(x => !vk62.some(z => z.MaSinhVien == x.MaSinhVien && z.IdNguoiHocLop == x.IdNguoiHocLop))

    console.log(c);

    var d = allData;
    var e = d.filter(x => x.ketQuaOutput);
    console.log(e.length)
  }
}
