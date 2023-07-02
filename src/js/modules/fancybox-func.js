import $ from 'jquery';
import { Fancybox } from "@fancyapps/ui";

export default function(){
    Fancybox.bind('[data-fancybox="gallery"]', {
        // Your custom options
    });
}