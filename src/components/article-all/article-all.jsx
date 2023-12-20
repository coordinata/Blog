import React from "react";
import classes from "./article.module.scss";
import Avatar from "../../img/avatar.png";

const ArticleAll = () => {
  return (
    <div>
      <li className={classes.article}>
        <div className={classes.wrapper1}>
          <p className={classes.title}>Some article title</p>
          <button className={classes.button_like}></button>
          <p className={classes.num_like}>12</p>
        </div>
        <div className={classes.wrapper2}>
          <p className={classes.user_name}>John Doe</p>
        </div>
        <div>
          <p className={classes.tag}>Tag1</p>
          <p className={classes.date}>March 5, 2020 </p>
          <img className={classes.avatar} src={Avatar} alt="avatar" />
        </div>
        <div>
          <p className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className={classes.text_all}>
            Oshiete, oshiete yo, sono shikumi wo Boku no naka ni, dare ka iru
            no? Kowareta kowareta yo, kono sekai de Kimi ga warau, nani mo miezu
            ni Kowareta boku nante sa Iki wo tomete Hodokenai, mou hodokenai yo
            Shinjitsu sa e, freeze Kowaseru, kowasenai Kurueru, kuruenai Anata
            wo mitsukete. Yureta yuganda sekai ni tatta boku wa, Sukitootte,
            mienakunatte Mitsukenai de boku no koto wo, Mitsumenaide Dare ka ga
            kaita sekai no naka de Anata wo kizutsuketaku wa nai yo Oboete te
            boku no koto wo Azayakana mama Mugen ni hirogaru kodoku ga karamaru
            mujaki ni waratta kioku ga sasatta ugokenai, hodokenai ugokenai,
            hodokenai ugokenai, ugokenai yo UNRAVEL GHOUL! kawattashimatta,
            kaerarenakatta futatsu ga karamaru, futari ga horobiru kowaseru
            kowasenai, kurueru kuruenai anata wo kegasenaiyo Yureta yuganda
            sekai ni tatta boku wa, Sukitootte, mienakutte Mitsukenai de boku no
            koto wo, Mitsumenaide Dare ka ga shikunda kodokuna wana ni mirai ga
            hodoketeshimau mae ni omoidashite boku no koto wo azayakana mama
            wasurenaide, wasurenaide wasurenaide, wasurenaide kawatteshimatta ni
            koto ni PARALYZE kaerarenai koto darake PARADISE oboetete boku no
            koto wo oshiete oshiete Boku no naka ni, dare ka iru no?
          </div>
        </div>
      </li>
    </div>
  );
};

export default ArticleAll;
