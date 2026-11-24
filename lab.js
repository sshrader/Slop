// shared helpers for the experiments
function $(id){return document.getElementById(id)}
function hash(s){var h=1779033703^s.length;for(var i=0;i<s.length;i++){h=Math.imul(h^s.charCodeAt(i),3432918353);h=h<<13|h>>>19}return h>>>0}
function rng(seed){var a=typeof seed==='string'?hash(seed):seed>>>0;return function(){a|=0;a=a+0x6D2B79F5|0;var t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function pick(r,a){return a[Math.floor(r()*a.length)]}
function shuffle(a,r){r=r||Math.random;a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(r()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
function copy(text,btn){var o=btn.textContent;var done=function(){btn.textContent='Copied';setTimeout(function(){btn.textContent=o},1100)};if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(text).then(done,function(){})}
// narrative word banks, used by several pages
var W={adj:['autonomous','agentic','quantum-resistant','decentralized','zero-knowledge','omnichain','community-owned','AI-native','verifiable','hyper-scalable','permissionless'],
noun:['intelligence mesh','agent economy','attention layer','liquidity fabric','inference network','coordination protocol','trust engine','compute marketplace','vibe oracle'],
verb:['orchestrates','tokenizes','aligns','unlocks','democratizes','accelerates','reimagines','harmonizes'],
obj:['global attention','human-AI synergy','the future of work','on-chain consciousness','trustless collaboration','a flywheel of incentives','the next billion users','everything, everywhere']};
