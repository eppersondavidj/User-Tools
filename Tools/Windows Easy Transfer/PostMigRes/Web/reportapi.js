function DoNothing ()
{
    return;
}

function GenerateApplicationEntry(
                                  base, 
                                  item, 
                                  api_directory,
                                  app_icon_directory,
                                  icon, 
                                  name, 
                                  publisher, 
                                  information_heading,
                                  product_update_information_text,
                                  product_update_information_link,
                                  product_information_text,
                                  product_information_link,
                                  support_information_text,
                                  support_information_link,
                                  show_deatils_link_name,
                                  normal_clickdown_description,
                                  expanded_clickdown_description,
                                  version,
                                  guid,
                                  appID,
                                  groupID,
                                  categoryID
                                 )
{
    var base_element = document.getElementById(base);
    var new_html;

    new_html  = '<DIV id="'+item+'" appID='+appID+' groupID='+groupID+' categoryID='+categoryID+'>';
    new_html += '    <DIV id="'+item+'_name_data">'+name+'</DIV>';
    new_html += '    <DIV id="'+item+'_publisher_data">'+publisher+'</DIV>';
    new_html += '    <DIV id="'+item+'_version_data">'+version+'</DIV>';
    new_html += '    <DIV id="'+item+'_product_update_information_data">'+product_update_information_link+'</DIV>';
    new_html += '    <DIV id="'+item+'_product_information_data">'+product_information_link+'</DIV>';
    new_html += '    <DIV id="'+item+'_support_information_data">'+support_information_link+'</DIV>';
    new_html += '    <DIV id="'+item+'_guid_data">'+guid+'</DIV>';
    new_html += '    <TABLE width="100%" border="0" cellspacing="0" cellpadding="0">';
    new_html += '        <TR>';
    new_html += '            <TD width="10%" align="left" valign="top">';
    new_html += '                <TABLE width="100%" border="0" cellspacing="0" cellpadding="0">';
    new_html += '                    <TR>';
    new_html += '                        <TD width="50%" align="center" valign="middle">';
    new_html += '                            <A href="javascript:DoNothing()" name="'+item+'_clickdown_normal" class="show_options">';
    new_html += '                                <IMG src="'+api_directory+'base_images/ClickDownNormal.gif" border="0" alt="'+normal_clickdown_description+'" onclick="javascript:document.getElementById(\''+item+'_clickdown_normal\').click()">';
    new_html += '                            </A>';
    new_html += '                            <A href="javascript:DoNothing()" name="'+item+'_clickdown_expanded" class="show_options">';
    new_html += '                                <IMG src="'+api_directory+'base_images/ClickDownExpanded.gif" border="0" alt="'+expanded_clickdown_description+'" onclick="javascript:document.getElementById(\''+item+'_clickdown_expanded\').click()">';
    new_html += '                            </A>';
    new_html += '                        </TD>';
    new_html += '                        <TD width="50%" align="center" valign="top">';
    new_html += '                            <IMG src="'+app_icon_directory+'/'+icon+'" name="'+item+'_icon" valign="middle" align="left"></IMG>';
    new_html += '                        </TD>';
    new_html += '                    </TR>';
    new_html += '                </TABLE>';
    new_html += '            </TD>';
    new_html += '            <TD width="75%" align="left" valign="top">';
    new_html += '                <TABLE width="100%" border="0" cellspacing="0" cellpadding="0" id="'+item+'_body">';
    new_html += '                    <TR>';
    new_html += '                        <TD align="left" valign="top" width="59%" id="'+item+'_name_display">';
    new_html += '                            <DIV style="font-size:77%;font-family:Segoe UI;color:#000000;font-weight:bold">'+name+'</DIV>';
    new_html += '                        </TD>';
    new_html += '                        <TD width="2%"></TD>';
    new_html += '                        <TD align="right" valign="top" width="39%" id="'+item+'_publisher_display">';
    new_html += '                            <DIV style="font-size:77%;font-family:Segoe UI;color:#000000;font-weight:bold">'+publisher+'</DIV>';
    new_html += '                        </TD>';
    new_html += '                    </TR>';
    new_html += '                    <TR id="'+item+'_showdetails_link_display">';
    new_html += '                        <TD align="left" colspan="3">';
    new_html += '                            <A style="cursor:hand;font-size:75%;font-family:Segoe UI;color:#0070C0;text-decoration:none;" onmouseover="this.style.textDecoration=\'underline\'" onMouseOut="this.style.textDecoration=\'none\'" id="'+item+'_showdetails_link" class="show_options" href="javascript:DoNothing()">'+show_deatils_link_name+'</A>';
    new_html += '                        </TD>';
    new_html += '                    </TR>';
    new_html += '                    <TR>';
    new_html += '                        <TD align="left" colspan="3" id="'+item+'_information_display">';
    new_html += '                            <DIV style="font-size:77%;font-family:Segoe UI;color:#888888;font-weight:bold">'+information_heading+'</DIV>';
    new_html += '                            <TABLE width="100%" border="0" cellspacing="0" cellpadding="0">';
    new_html += '                                <TR>';
    new_html += '                                    <TD width="4%" rowspan="4"></TD>';
    new_html += '                                    <TD></TD>';
    new_html += '                                </TR>';
    new_html += '                                <TR id="'+item+'_product_update_information_display">';
    new_html += '                                    <TD>';
    new_html += '                                        <span title="'+product_update_information_link+'">';
    new_html += '                                        <A style="font-size:75%;cursor:hand;font-family:Segoe UI;color:#0070C0;text-decoration:none" onmouseover="this.style.textDecoration=\'underline\'" onMouseOut="this.style.textDecoration=\'none\'" id="'+item+'_product_update_information_link" class="product_update_information" href="javascript:DoNothing()">'+product_update_information_text+'</A></span>';
    new_html += '                                    </TD>';
    new_html += '                                </TR>';
    new_html += '                                <TR id="'+item+'_product_information_display">';
    new_html += '                                    <TD>';
    new_html += '                                        <span title="'+product_information_link+'">';
    new_html += '                                        <A style="font-size:75%;cursor:hand;font-family:Segoe UI;color:#0070C0;text-decoration:none" onmouseover="this.style.textDecoration=\'underline\'" onMouseOut="this.style.textDecoration=\'none\'" id="'+item+'_product_information_link" class="product_information" href="javascript:DoNothing()">'+product_information_text+'</A></span>';
    new_html += '                                    </TD>';
    new_html += '                                </TR>';
    new_html += '                                <TR id="'+item+'_support_information_display">';
    new_html += '                                    <TD>';
    new_html += '                                        <span title="'+support_information_link+'">';
    new_html += '                                        <A style="font-size:75%;cursor:hand;font-family:Segoe UI;color:#0070C0;text-decoration:none" onmouseover="this.style.textDecoration=\'underline\'" onMouseOut="this.style.textDecoration=\'none\'" id="'+item+'_support_information_link" class="support_information" href="javascript:DoNothing()">'+support_information_text+'</A></span>';
    new_html += '                                    </TD>';
    new_html += '                                </TR>';
    new_html += '                                <TR>';
    new_html += '                                    <TD height=\"10\"></TD>';
    new_html += '                                </TR>';
    new_html += '                            </TABLE>';
    new_html += '                        </TD>';
    new_html += '                    </TR>';
    new_html += '                </TABLE>';
    new_html += '            </TD>';
    new_html += '            <TD width="85%" align="left" valign="top">';
    new_html += '                <TABLE width="100%" border="0" cellspacing="0" cellpadding="0" id="'+item+'_appinstalled_display">';
    new_html += '                    <TR>';
    new_html += '                        <TD width="25%" align="right" valign="middle">';
    new_html += '                            <IMG src="'+api_directory+'base_images/AppInstalled.gif" width="100%"></IMG>';
    new_html += '                        </TD>';
    new_html += '                        <TD width="75%" align="left" valign="middle">';
    new_html += '                            <DIV style="font-size:75%;font-family:Segoe UI;color:#22B04D;font-style:italic" id="'+item+'_appinstalled_data"></DIV>';
    new_html += '                        </TD>';
    new_html += '                    </TR>';
    new_html += '                </TABLE>';
    new_html += '            </TD>';
    new_html += '        </TR>';
    new_html += '        <TR>';
    new_html += '            <TD height="3" colspan="3"></TD>';
    new_html += '        </TR>';
    new_html += '        <TR bgcolor="#CCECFF">';
    new_html += '            <TD height="1" colspan="3"></TD>';
    new_html += '        </TR>';
    new_html += '        <TR>';
    new_html += '            <TD height="3" colspan="3"></TD>';
    new_html += '        </TR>';
    new_html += '    </TABLE>';
    new_html += '</DIV>';

    base_element.insertAdjacentHTML('BeforeEnd', new_html);    
}

function GenerateApplicationGroup (
                                   base,
                                   item,
                                   api_directory,
                                   title,
                                   normal_clickdown_description,
                                   expanded_clickdown_description,
                                   guid,
                                   groupID,
                                   categoryID
                                  )
{
    var base_element = document.getElementById(base);
    var new_html;

    new_html  = '<DIV id="'+item+'" groupID='+groupID+' categoryID='+categoryID+'>';
    new_html += '    <DIV id="'+item+'_title_data">'+title+'</DIV>';
    new_html += '    <DIV id="'+item+'_guid_data">'+guid+'</DIV>';
    new_html += '    <TABLE width="100%" cellpadding="5" cellspacing="0" border="0" id="'+item+'_body">';
    new_html += '       <TR>';
    new_html += '           <TD width="3%" align="left">';
    new_html += '               <A href="javascript:DoNothing()" name="'+item+'_clickdown_normal" class="show_group">';
    new_html += '                   <IMG src="'+api_directory+'base_images/ClickDownNormal.gif" border="0" alt="'+normal_clickdown_description+'" onclick="javascript:document.getElementById(\''+item+'_clickdown_normal\').click()">';
    new_html += '               </A>';
    new_html += '               <A href="javascript:DoNothing()" name="'+item+'_clickdown_expanded" class="show_group">';
    new_html += '                   <IMG src="'+api_directory+'base_images/ClickDownExpanded.gif" border="0" alt="'+expanded_clickdown_description+'" onclick="javascript:document.getElementById(\''+item+'_clickdown_expanded\').click()">';
    new_html += '               </A>';
    new_html += '           </TD>';
    new_html += '           <TD width="97%" align="left">';
    new_html += '               <DIV style="font-size:77%;font-family:Segoe UI;color:#000000;font-weight:bold">'+title+'</DIV>';
    new_html += '           </TD>';
    new_html += '       </TR>';
    new_html += '       <TR bgcolor="#CCECFF">';
    new_html += '           <TD height="1" colspan="2"></TD>';
    new_html += '       </TR>';
    new_html += '       <TR>';
    new_html += '           <TD></TD>';
    new_html += '           <TD>';
    new_html += '               <DIV id="'+item+'_group_data"></DIV>';
    new_html += '           </TD>';
    new_html += '       </TR>';
    new_html += '   </TABLE>';
    new_html += '</DIV>';
    
    base_element.insertAdjacentHTML('BeforeEnd', new_html);    
}

function GenerateApplicationCategory (
                                      base,
                                      item,
                                      api_directory,
                                      heading,
                                      helper_text,
                                      normal_clickdown_description,
                                      expanded_clickdown_description,
                                      guid,
                                      categoryID
                                     )
{
    var base_element = document.getElementById(base);
    var new_html;

    new_html  = '<DIV id="'+item+'" categoryID='+categoryID+'>';
    new_html += '    <DIV id="'+item+'_heading_data">'+heading+'</DIV>';
    new_html += '    <DIV id="'+item+'_guid_data">'+guid+'</DIV>';
    new_html += '    <TABLE width="100%" cellpadding="5" cellspacing="0" border="0" style="border: 1px solid black" id="'+item+'_body">';
    new_html += '       <TR style="background-image:url('+api_directory+'base_images/Column.bmp);background-size:100%;background-position:left;">';
    new_html += '           <TD width="3%" align="left">';
    new_html += '               <A href="javascript:DoNothing()" name="'+item+'_clickdown_normal" class="show_category">';
    new_html += '                   <IMG src="'+api_directory+'base_images/ClickDownNormal.gif" border="0" alt="'+normal_clickdown_description+'" onclick="javascript:document.getElementById(\''+item+'_clickdown_normal\').click()">';
    new_html += '               </A>';
    new_html += '               <A href="javascript:DoNothing()" name="'+item+'_clickdown_expanded" class="show_category">';
    new_html += '                   <IMG src="'+api_directory+'base_images/ClickDownExpanded.gif" border="0" alt="'+expanded_clickdown_description+'" onclick="javascript:document.getElementById(\''+item+'_clickdown_expanded\').click()">';
    new_html += '               </A>';
    new_html += '           </TD>';
    new_html += '           <TD width="97%" align="left">';
    new_html += '               <DIV style="font-size:77%;font-family:Segoe UI;color:#000000">'+heading+'</DIV>';
    new_html += '           </TD>';
    new_html += '       </TR>';
    new_html += '       <TR>';
    new_html += '           <TD colspan="2">';
    new_html += '               <DIV style="font-size:75%;font-family:Segoe UI;color:#000000">'+helper_text+'</DIV>';
    new_html += '           </TD>';
    new_html += '       </TR>';
    new_html += '       <TR bgcolor="#CCECFF">';
    new_html += '           <TD height="1" colspan="2"></TD>';
    new_html += '       </TR>';
    new_html += '       <TR>';
    new_html += '           <TD colspan="2">';
    new_html += '               <DIV id="'+item+'_category_data"></DIV>';
    new_html += '           </TD>';
    new_html += '       </TR>';
    new_html += '   </TABLE>';
    new_html += '   <TABLE width="100%" cellpadding="0" cellspacing="0" border="0">';
    new_html += '       <TR height="10">';
    new_html += '           <TD>';
    new_html += '           </TD>';
    new_html += '       </TR>';
    new_html += '   </TABLE>';
    new_html += '</DIV>';
    
    base_element.insertAdjacentHTML('BeforeEnd', new_html);    
}

function GenerateMigrationEntry(
                                base, 
                                item, 
                                api_directory,
                                html_directory,
                                icon, 
                                heading, 
                                show_details_link_name,
                                guid,
                                failure_category
                               )
{
    var base_element;
    var new_html;

    if(failure_category == true)
    { 
        base_element = document.getElementById(base+'_failure_category');
    }
    else
    {
        base_element = document.getElementById(base+'_successful_category');
    }
    
    new_html  = '<DIV id="'+item+'">';
    new_html += '    <DIV id="'+item+'_heading_data">'+heading+'</DIV>';
    new_html += '    <DIV id="'+item+'_guid_data">'+guid+'</DIV>';
    new_html += '    <TABLE width="100%" border="0" cellspacing="0" cellpadding="0" id="'+item+'_body">';
    new_html += '        <TR>';
    new_html += '            <TD align="right" valign="middle" width="9%" rowspan="2">';
    new_html += '                <IMG src="'+api_directory+'base_images/'+icon+'" width="80%"></IMG>';
    new_html += '            </TD>';
    new_html += '            <TD align="left" valign="middle" width="2%" rowspan="2">';
    new_html += '            </TD>';
    new_html += '            <TD align="left" valign="middle">';
     
    if(failure_category == true)
    {
        new_html += '<DIV style="font-size:80%;font-family:Segoe UI;color:#FF0000;font-weight:bold">'+heading+'</DIV>';
    }
    else
    {
        new_html += '<DIV style="font-size:90%;font-family:Segoe UI;color:#000000;">'+heading+'</DIV>';
    }
    
    new_html += '            </TD>';
    new_html += '        </TR>';
    new_html += '        <TR>';
    new_html += '            <TD align="left" valign="top">';
    new_html += '                <A style="cursor:hand;font-size:80%;font-family:Segoe UI;color:#0070C0;text-decoration:none" onmouseover="this.style.textDecoration=\'underline\'" onMouseOut="this.style.textDecoration=\'none\'" id="'+item+'_showdetails_link" class="show_details" href="javascript:DoNothing()">'+show_details_link_name+'</A>';
    new_html += '            </TD>';
    new_html += '        </TR>';
    new_html += '        <TR>';
    new_html += '            <TD height="10" colspan="3"></TD>';
    new_html += '        </TR>';
    new_html += '        <TR bgcolor="#AAAAAA">';
    new_html += '            <TD height="1" colspan="3"></TD>';
    new_html += '        </TR>';
    new_html += '        <TR>';
    new_html += '            <TD height="10" colspan="3"></TD>';
    new_html += '        </TR>';
    new_html += '    </TABLE>';
    new_html += '</DIV>';

    base_element.insertAdjacentHTML('BeforeEnd', new_html);
}
