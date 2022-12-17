import post1 from '../assets/socialMediaPosts/post1.png'
import post2 from '../assets/socialMediaPosts/post2.png'
import post3 from '../assets/socialMediaPosts/post3.png'
import post4 from '../assets/socialMediaPosts/post4.png'
import post5 from '../assets/socialMediaPosts/post5.png'
import post6 from '../assets/socialMediaPosts/post6.png'
import post7 from '../assets/socialMediaPosts/post7.png'
import post8 from '../assets/socialMediaPosts/post8.png'
import post9 from '../assets/socialMediaPosts/post9.png'
import post10 from '../assets/socialMediaPosts/post10.png'
import post11 from '../assets/socialMediaPosts/post11.png'
import post12 from '../assets/socialMediaPosts/post12.png'
import post13 from '../assets/socialMediaPosts/post13.png'
import post14 from '../assets/socialMediaPosts/post14.png'
import post15 from '../assets/socialMediaPosts/post15.png'
import post16 from '../assets/socialMediaPosts/post16.png'
import post17 from '../assets/socialMediaPosts/post17.png'
import post18 from '../assets/socialMediaPosts/post18.png'
import post19 from '../assets/socialMediaPosts/post19.png'
import post20 from '../assets/socialMediaPosts/post20.png'
import post21 from '../assets/socialMediaPosts/post21.png'
import post22 from '../assets/socialMediaPosts/post22.png'
import post23 from '../assets/socialMediaPosts/post23.png'
import post24 from '../assets/socialMediaPosts/post24.png'




let allPosts = [
    post1, post2, post3, post4, post5, post6, post7, post8, post9, post10, post11, post12,
    post13, post14, post15, post16, post17, post18, post19, post20, post21, post22, post23, post24
]

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
    
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));
                    
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        
    return array;
 }

 export const Posts = shuffleArray(allPosts)