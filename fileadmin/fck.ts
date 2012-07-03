lib.t3sports.profile.tntrikot =< lib.t3sports.teamnote

[globalVar = TSFE:id=33, TSFE:page|pid=33]
lib.t3sports.profile {
  firstpicture =< lib.t3sports.profile.pictures
  firstpicture {
    template = EXT:cfc_league_fe/res/lightboxpics.html  
    limit = 1
    offset = 0
    subpartName = ###FIRSTPICTURE###
	media {
      file = IMG_RESOURCE
      file.file.import.field = file
      file.file.maxW = {$plugin.tx_cfcleaguefe_report.maxW_profilePicture}
      file.file.maxH = {$plugin.tx_cfcleaguefe_report.maxH_profilePicture}
      thumbnail < .file
      thumbnail = IMAGE
      thumbnail.file.maxW = 200
      thumbnail.file.maxH = 300
      thumbnail.params = border="0"
      thumbnail.titleText.field = title
    }
  }
}

[global]
#| --- CODE CLEANUP ------------------------------------------------------------------------------------ |#
plugin.tx_cssstyledcontent._CSS_DEFAULT_STYLE >

tt_content {
	stdWrap.dataWrap >
	stdWrap.prefixComment >
	header.20.prefixComment >
	default.prefixComment >
	text.stdWrap.prefixComment >
	text.20.prefixComment >
	textpic.20.stdWrap.prefixComment >
	table.20.stdWrap.prefixComment >
	menu.20.stdWrap.prefixComment >
	image.20.stdWrap.prefixComment >
	list.20.stdWrap.prefixComment >
}

// Kill spaces and clear.gif
lib.stdheader.stdWrap.space = 0|0
lib.stdheader.stdWrap.dataWrap >
tt_content.stdWrap >
tt_content {
	stdWrap.space = 0|0
	stdWrap.spaceBefore = 0
	stdWrap.spaceAfter = 0
	header.stdWrap.space = 0|0
	textpic.20 {
		spaceBelowAbove = 0
		noStretchAndMarginCells = 1
		1.params =
	}
	
}



#| --- Page Config ------------------------------------------------------------------------------------ |#
config {
	sys_language_uid = 0
	language = de
	locale_all = de_DE 
}

page = PAGE
page.config {
	doctype = xhtml_trans
	xhtmlDoctype = xhtml_trans
	xhtml_cleaning = all
	disableImgBorderAttr = 1
	disablePrefixComment = 1
	htmlTag_langKey = de-DE 
	pageTitleFirst = 1
	removeDefaultJS = 1
	inlineStyle2TempFile = 1
	simulateStaticDocuments = 1
	simulateStaticDocuments_noTypeIfNoTitle = 1
	metaCharset = utf-8
	additionalHeaders = Content-Type:text/html;charset=utf-8	
	no_cache =1
	nocache =1
}
	


#| --- Header & Body ---------------------------------------------------------------------------------- |#
page.meta { 
	robots = FOLLOW, INDEX
	author = Kevin Purrmann
	MSSmartTagsPreventParsing = true
	imagetoolbar = false
	language = de
}

page.typeNum = 0
page.bodyTag = <body>
page.stylesheet = fileadmin/css/web.css
page.headerData.3 = TEXT
page.headerData.3.value ( 
	<link rel="stylesheet" type="text/css" href="fileadmin/src/index.css" />
	<script language="javascript" type="text/javascript" src="fileadmin/src/jquery-1.3.2.min.js"></script>
	<script language="javascript" type="text/javascript" src="fileadmin/src/jquery.lightbox-0.5.js"></script>
	<script language="javascript" type="text/javascript" src="fileadmin/src/jquery.sorter.js"></script>	
	<script language="javascript" type="text/javascript" src="fileadmin/src/animationen.js"></script>
	<script type="text/javascript" src="http://static.fussball.de/fbdeAPI/js/fbdeAPIFunctions.js?schluessel=15829EFE3AE49E9CD2B4142480261EAB6E730DA9"></script>
)

#|-----------tt_content------------------#

lib.stdheader.10.2.fontTag = <div class="boxhead"><h2>|</h2></div>

temp.SPONSOREN < plugin.tx_macinabanners_pi1
temp.SPONSOREN {
	results_at_a_time = 3
	placement = top
	mode = random_all
	pidList = 29
	recursive = 0
	results_at_a_time = 3
}

temp.ARTIKEL < temp.SPONSOREN
temp.ARTIKEL {
	placement >
	placement = left
	pidList >
	pidList = 40
	results_at_a_time = 3
}

plugin.tt_news {
	templateFile = fileadmin/news_templates.html
	code = LATEST
	pid_list = 34
	singlePid = 35
	limit = 9
	categoryMode = 0
	latestLimit = 3
	displayLatest {
		image {
		    file.maxW = 705
		    file.maxH = 290
		    imageLinkWrap = 1
		    stdWrap.spaceAfter >
		}
	}
}

[globalVar = TSFE:id=15, TSFE:page|pid=15]
plugin.tt_news {
	categoryMode = 2
	categorySelection = 2
}
[global]

lib.newsList < plugin.tt_news
lib.newsList {
	code = LIST2
	excludeAlreadyDisplayedNews = 1
	displayList {
		image {
			file.maxW = 100
			file.maxH = 66
			imageLinkWrap = 1
			stdWrap.spaceAfter >
		}
		subheader_stdWrap {
		  crop = 300 | ... | 1
		  ifEmpty.field = bodytext
		}
	}
}


# MENU

tt_content.menu = COA
tt_content.menu {
	20 {

		1 {
			wrap = <ul class="menu">|</ul>
			1.NO.noBlur = 1
			1.CUR = 1
			1.CUR.doNotLinkIt = 1
		}
		4 {
			wrap >
			1 = GMENU
			1 {
				wrap = <ul>|</ul>		 
				noBlur = 1
				NO = 1
				NO {
					wrap = <li>|</li> 
					altImgResource.import = uploads/media/
					altImgResource.import.field = media
					altImgResource.import.listNum = 0
					ATagTitle.field = subtitle // title
				}
			}
		}
	}
}

#| --- Template --------------------------------------------------------------------------------------- |#

page.10 = TEMPLATE
page.10 {
	template = FILE
	workOnSubpart = DOC
	template.file = fileadmin/index.html	
}

[globalVar=TSFE:page|layout=1] 
	page.10.template.file = fileadmin/news.html 
[global]

[globalVar=TSFE:page|layout=2] 
	page.10.template.file = fileadmin/mannschaften.html 
[global] 


#| --- Markers & Subparts ----------------------------------------------------------------------------- |#

page.10 {

	subparts.NEWS < plugin.tt_news
	
	subparts.CONTENT = CONTENT
	subparts.CONTENT < styles.content.get
	
	subparts.CONTENT_RIGHT = CONTENT
	subparts.CONTENT_RIGHT {
		table = tt_content
		select {
			where = colPos = 2
			begin = 0
			max = 4
		}
		renderObj = COA
		renderObj.wrap = <div class="box"><div class="boxbody">|</div></div>
		renderObj.10 < tt_content
	}
		
	subparts.TEASER = CONTENT
	subparts.TEASER = styles.content.getLeft
	
	subparts.CONTENT_LEFT = CONTENT		
	subparts.CONTENT_LEFT < styles.content.getLeft

	subparts.FOOTER = CONTENT
	subparts.FOOTER {
		table=tt_content
		select {
				pidInList = 9 #Seite ist im Pool
				where = colPos = 1
	            begin = 0
	            max = 1
        }
	}
		
	subparts.MAINMENU = HMENU
	subparts.MAINMENU {
		1 = TMENU
		1 {
			wrap >
			expAll = 0
			noBlur = 1
			NO.doNotLinkIt = 1
			NO.ATagParams = class="main"						
			NO.ATagTitle.field = header // title // subtitle // alias			
			NO.wrapItemAndSub = <li>|</li>
		}
	}
	
	subparts.SUBMENU_START = HMENU
	subparts.SUBMENU_START {
		special = directory
		special.value = 2
		1 = TMENU
		1 {
			wrap >
			expAll = 0
			noBlur = 1
			ATagParams = 1
			NO.ATagTitle.field = header // title // subtitle // alias			
			NO.wrapItemAndSub = <li>|</li>
		}
	}	

	subparts.SUBMENU_VEREIN = HMENU
	subparts.SUBMENU_VEREIN {
		special = directory
		special.value = 7
		1 = TMENU
		1 {
			wrap >
			expAll = 0
			noBlur = 1
			ATagParams = 1
			NO.ATagTitle.field = header // title // subtitle // alias			
			NO.wrapItemAndSub = <li>|</li>
		}
	}		
	
	subparts.SUBMENU_MANNSCHAFT = HMENU
	subparts.SUBMENU_MANNSCHAFT {
		special = directory
		special.value = 8
		1 = TMENU
		1 {
			wrap >
			expAll = 0
			noBlur = 1
			ATagParams = 1
			NO.ATagTitle.field = header // title // subtitle // alias			
			NO.wrapItemAndSub = <li>|</li>
		}
	}	

	subparts.SUBMENU_JUNIOREN = HMENU
	subparts.SUBMENU_JUNIOREN {
		special = directory
		special.value = 9
		1 = TMENU
		1 {
			wrap >
			expAll = 0
			noBlur = 1
			ATagParams = 1
			NO.ATagTitle.field = header // title // subtitle // alias			
			NO.wrapItemAndSub = <li>|</li>
		}
	}	
	subparts.SUBMENU_MEDIEN = HMENU
	subparts.SUBMENU_MEDIEN {
		special = directory
		special.value = 10
		1 = TMENU
		1 {
			wrap >
			expAll = 0
			noBlur = 1
			ATagParams = 1
			NO.ATagTitle.field = header // title // subtitle // alias
			NO.wrapItemAndSub = <li>|</li>
		}
	}
	subparts.SUBMENU_FANSHOP = HMENU
	subparts.SUBMENU_FANSHOP {
		special = list
		special.value = 113
		1 = TMENU
		1 {
			wrap >
			expAll = 0
			noBlur = 1
			ATagParams = 1
			NO.ATagTitle.field = header // title // subtitle // alias
			NO.wrapItemAndSub = <li>|</li>
		}
	}
	
	subparts.SUBMENU = HMENU
	subparts.SUBMENU {
		entryLevel = 1
		1 = TMENU
		1 {
			wrap = |
			expAll = 1
			NO.wrapItemAndSub = ||&nbsp;&#124&nbsp;||&nbsp;&#124&nbsp;|*|
		}
	}
	
	subparts.SPONSOREN >
	subparts.ARTIKEL < temp.SPONSOREN
	subparts.FURTHER_NEWS < lib.newsList
	
	marks.LIGHTBOX = TEXT
	marks.LIGHTBOX.value = 

}
[globalVar = TSFE:id=2, TSFE:page|pid=2]
page.10 {
	marks.LIGHTBOX = COA
	marks.LIGHTBOX {
		10 = CONTENT
		10 {
			table = tt_content
			select {
				 pidInList = 2
				 where = colPos = 3
				 max = 1
			}
			wrap = <div id="newsflash" style="display:none;">|</div>
			required = 1
		}

	}
	subparts.CONTENT >
	subparts.CONTENT = COA
	subparts.CONTENT {
		10 = CONTENT
		10 {
			wrap = <div class="teaser-wrap-left">|</div>
			table = tt_content
			select {
				pidInList = 2
				where =  colPos = 0
				begin = 0
				max = 1
			}
		}
		20 < .10
		20.wrap = <div class="teaser-wrap-right">|</div>
		20.select.begin = 1
	}
}
[global]