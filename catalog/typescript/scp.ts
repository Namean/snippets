#!/bin/env ts-node

/*


scp [-346ABCOpqRrsTv] [-c cipher] [-D sftp_server_path] [-F ssh_config] [-i identity_file] [-J destination]
[-l limit] [-o ssh_option] [-P port] [-S program] source ... target

// https://www.techtarget.com/searchdatacenter/tutorial/Everything-you-need-to-know-about-Linux-man-pages


A typical man page is broken down into the following sections:

    name
    synopsis
    configuration
    description
    options
    exit status
    return value
    environment
    files
    versions
    attributes
    conforming to
    notes
    bugs
    example
    see also


    The sections of the man pages that are the most helpful for typical admin tasks are synopsis (the structure of the command), description (a description of the command) and options (options that are available to the command). These sections alone should give admins a good idea of how the command in question works.



*/

class Command {

    name: string | undefined;



    constructor() {
        
    }

}


const scp = {
    name:
  options: "-346ABCOpqRrsTv",

};
