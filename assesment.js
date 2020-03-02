(function () {
    'use strict';
    const input = document.getElementById('inputName');
    const resultArea = document.getElementById('result-area');
    const tweetArea = document.getElementById('tweet-area');
    const button = document.getElementById('result_btn');
    button.onclick = () =>{
        let inputText = input.value;
        let resultText = assesment(inputText);
        if(resultText.length === 0){
            return;
        }
        clearChild(resultArea);
        clearChild(tweetArea);
        const header = document.createElement('h3');
        header.innerText = '診断結果';
        const paragraph = document.createElement('p');
        paragraph.innerText = resultText;
        resultArea.appendChild(header);
        resultArea.appendChild(paragraph);

        const anchor = document.createElement('a');
        let hashTag = encodeURIComponent('あなたのいいところ');
        let href = 'https://twitter.com/intent/tweet?button_hashtag=' + hashTag +' &ref_src=twsrc%5Etfw';
        anchor.setAttribute('href',href);
        anchor.className = 'twitter-hashtag-button';
        anchor.setAttribute('data-text',resultText);
        anchor.innerText = 'Tweet #あなたのいいところ';
        tweetArea.appendChild(anchor);



    };
    const answers = [
        '{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
        '{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
        '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
        '{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
        '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
        '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
        '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
        '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
        '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
        '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
        '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
        '{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
        '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
        '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
        '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
        '{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。'
    ];

    /**
     * 名前の文字列を渡すと診断結果を返す関数
     * @param {string} userName ユーザーの名前
     * @return {string} 診断結果
     */
    function assesment(userName){
        let sumOfCharCode = 0;
        for(let i = 0;i<userName.length;i++){
            sumOfCharCode  = sumOfCharCode + userName.charCodeAt(i);
        }
        let result = answers[sumOfCharCode%answers.length];
        return result.replace(/\{userName\}/g,userName);    
        //JSで正規表現は/で囲んだ文字列。＼jはエスケープシーケンスで特殊文字を文字として扱う.
        //gはJSの正規表現におけるオプションで、置き換えたい文字列全てを置き換える。
        
    }

    function clearChild(parent){
        while(parent.firstChild){
            parent.removeChild(parent.firstChild);
        }
    }



})();